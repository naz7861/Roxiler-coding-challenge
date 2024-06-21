from flask import Flask, request, jsonify
from pymongo import MongoClient
import requests

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['transactionDB']
collection = db['transactions']

@app.route('/initialize', methods=['POST'])
def initialize_database():
    response = requests.get('URL_OF_THIRD_PARTY_API')
    data = response.json()
    
    for item in data:
        collection.insert_one(item)
    
    return jsonify({"message": "Database initialized with seed data"}), 200
