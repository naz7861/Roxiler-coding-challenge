@app.route('/barchart', methods=['GET'])
def get_barchart_data():
    month = request.args.get('month')
    
    price_ranges = {
        "0-100": 0, "101-200": 0, "201-300": 0, "301-400": 0,
        "401-500": 0, "501-600": 0, "601-700": 0, "701-800": 0,
        "801-900": 0, "901-above": 0
    }
    
    transactions = collection.find({"dateOfSale": {"$regex": f"-{month}-"}})
    for item in transactions:
        price = item['price']
        if price <= 100:
            price_ranges["0-100"] += 1
        elif price <= 200:
            price_ranges["101-200"] += 1
        elif price <= 300:
            price_ranges["201-300"] += 1
        elif price <= 400:
            price_ranges["301-400"] += 1
        elif price <= 500:
            price_ranges["401-500"] += 1
        elif price <= 600:
            price_ranges["501-600"] += 1
        elif price <= 700:
            price_ranges["601-700"] += 1
        elif price <= 800:
            price_ranges["701-800"] += 1
        elif price <= 900:
            price_ranges["801-900"] += 1
        else:
            price_ranges["901-above"] += 1
    
    return jsonify(price_ranges)
