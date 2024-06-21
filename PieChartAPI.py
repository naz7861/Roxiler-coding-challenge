@app.route('/piechart', methods=['GET'])
def get_piechart_data():
    month = request.args.get('month')
    
    categories = {}
    transactions = collection.find({"dateOfSale": {"$regex": f"-{month}-"}})
    for item in transactions:
        category = item['category']
        if category in categories:
            categories[category] += 1
        else:
            categories[category] = 1
    
    return jsonify(categories)
