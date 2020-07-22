from flask import Blueprint, request, jsonify
import json
with open('../stores.json', 'r') as stores_file:
  data = stores_file.read()
stores_list = json.loads(data)

stores_bp = Blueprint('stores', __name__)

@stores_bp.route('/search', methods=["GET"])
def search():
  query = request.args.get('query')
  response = ""

  if query:
    for store in stores_list:
      if query in store['postcode']:
        response = store['name']
      elif query in store['name']:
        response = store['name']

    return jsonify(response)

  else:
    response = 'Invalid search'
    return response