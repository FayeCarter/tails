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

    query = query.lower().replace(" ", "") 

    for store in stores_list:
      if query in store['postcode'].lower().replace(" ", ""):
        response = store['name']
      elif query in store['name'].lower():
        response = store['name']

    return jsonify(response)

  else:
    response = 'Invalid search'
    return response