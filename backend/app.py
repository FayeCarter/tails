from flask import Flask

from stores.stores import stores_bp

app = Flask(__name__)
if __name__ == '__main__':
  app.run(debug=True)

app.register_blueprint(stores_bp, url_prefix='/stores')

@app.route('/')
def index():
  return "Tails Stores"
