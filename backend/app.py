from flask import Flask
from flask_cors import CORS

from stores.stores import stores_bp

app = Flask(__name__)
if __name__ == '__main__':
  app.run(debug=True)

cors = CORS(app, resources={r"/stores/*": {"origins": "*"}})
app.register_blueprint(stores_bp, url_prefix='/stores')

@app.route('/')
def index():
  return "Tails Stores"
