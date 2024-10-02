from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
import boto3
from config import Config

auth_blueprint = Blueprint('auth', __name__)

# Initialize DynamoDB
dynamodb = boto3.resource(
    'dynamodb',
    region_name=Config.DYNAMODB_REGION,
    aws_access_key_id=Config.AWS_ACCESS_KEY,
    aws_secret_access_key=Config.AWS_SECRET_KEY
)
users_table = dynamodb.Table('Users')

@auth_blueprint.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Check if user exists
    existing_user = users_table.get_item(Key={'email': email})
    if 'Item' in existing_user:
        return jsonify({"msg": "User already exists"}), 400
    
    # Hash the password
    hashed_password = generate_password_hash(password)
    
    # Store user in DynamoDB
    users_table.put_item(
        Item={
            'email': email,
            'password': hashed_password,
            'subscription_type': 'free'  # Default to free user
        }
    )
    
    return jsonify({"msg": "User registered successfully"}), 201

@auth_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Get user from DynamoDB
    user = users_table.get_item(Key={'email': email})
    if 'Item' not in user:
        return jsonify({"msg": "User not found"}), 404
    
    # Check password
    user_item = user['Item']
    if not check_password_hash(user_item['password'], password):
        return jsonify({"msg": "Invalid credentials"}), 401
    
    # Create JWT
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200
