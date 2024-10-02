from flask import Flask
from flask_jwt_extended import JWTManager
from auth.routes import auth_blueprint
from products.routes import products_blueprint
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Initialize JWT
jwt = JWTManager(app)

# Register Blueprints
app.register_blueprint(auth_blueprint, url_prefix='/auth')
app.register_blueprint(products_blueprint, url_prefix='/products')

if __name__ == '__main__':
    app.run(debug=True)
