import json

def test_search_route(app, client):
  """
  Stores search route is reachable
  """
  response = client.get('/stores/search')
  assert response.status_code == 200
  assert response.data == b'Invalid search'

def test_name_search_function(app, client):
  """
  When searching for a place name
  The stores search route returns json result
  """
  response = client.get('/stores/search?query=have')
  assert response.status_code == 200
  assert response.json == ['Newhaven']

def test_postcode_search_function(app, client):
  """
  When searching for a postcode
  The stores search route returns json result
  """
  response = client.get('/stores/search?query=AL1')
  assert response.status_code == 200
  assert response.json == ['St_Albans']

def test_search_format(app, client):
  """
  When searching for a postcode without correct formatting
  The stores search route returns json result
  """
  response = client.get('/stores/search?query=l 12')
  assert response.status_code == 200
  assert response.json == ['St_Albans']

def test_name_and_postcode(app, client):
  """
  When searching for a postcode without correct formatting
  The stores search route returns json result
  """
  response = client.get('/stores/search?query=br')

  expected_response = [
    'Orpington', 
    'Broadstairs', 
    'Bracknell',
    'Tunbridge_Wells', 
    'Brentford'
  ]

  assert response.status_code == 200
  assert response.json == expected_response
