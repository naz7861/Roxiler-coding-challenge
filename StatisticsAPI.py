@app.route('/statistics', methods=['GET'])
def get_statistics():
    month = request.args.get('month')
    
    sold_items = collection.count_documents({"dateOfSale": {"$regex": f"-{month}-"}, "sold": True})
    not_sold_items = collection.count_documents({"dateOfSale": {"$regex": f"-{month}-"}, "sold": False})
    total_sales = sum([item['price'] for item in collection.find({"dateOfSale": {"$regex": f"-{month}-"}, "sold": True})])
    
    return jsonify({
        "total_sales_amount": total_sales,
        "total_sold_items": sold_items,
        "total_not_sold_items": not_sold_items
    })
