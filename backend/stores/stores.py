from flask import Blueprint

stores_bp = Blueprint('stores', __name__)

@stores_bp.route('/search', methods=["GET"])
def search():
  return "Search"
