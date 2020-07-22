def test_index(app, client):
  del app
  response = client.get('/')
  assert response.status_code == 200
  assert response.data == b"Tails Stores"
