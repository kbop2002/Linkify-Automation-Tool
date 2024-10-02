from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
import boto3
from config import Config

products_blueprint = Blueprint('products', __name__)

# Initialize DynamoDB
dynamodb = boto3.resource(
    'dynamodb',
    region_name=Config.DYNAMODB_REGION,
    aws_access_key_id=Config.AWS_ACCESS_KEY,
    aws_secret_access_key=Config.AWS_SECRET_KEY
)
products_table = dynamodb.Table('Products')

@products_blueprint.route('/link', methods=['POST'])
@jwt_required()
def link_product():
    user_email = get_jwt_identity()
    data = request.get_json()
    ebay_link = data.get('ebay_link')
    supplier_link = data.get('supplier_link')
    
    # Store product links in DynamoDB
    products_table.put_item(
        Item={
            'user_email': user_email,
            'ebay_link': ebay_link,
            'supplier_link': supplier_link
        }
    )
    
    return jsonify({"msg": "Product linked successfully"}), 201

# Other routes for order automation and monitoring to be added
