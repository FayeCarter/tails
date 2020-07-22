def test_search(app, client):
  response = client.get('/stores/search')
  assert response.status_code == 200
