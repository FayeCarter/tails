import json

def test_search_route(app, client):
  """
  Stores search route is reachable
  """
  response = client.get('/stores/search')
  assert response.status_code == 200
  assert response.data == b'Invalid search'

def test_search_function(app, client):
  """
  When searching for a place name
  The stores search route returns json result
  """
  response = client.get('/stores/search?query=hav')
  assert response.status_code == 200
  assert response.json == 'Newhaven'
