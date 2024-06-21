@app.route('/transactions', methods=['GET'])
def list_transactions():
    month = request.args.get('month')
    search = request.args.get('search', '')
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 10))
    
    query = {"dateOfSale": {"$regex": f"-{month}-"}}
    if search:
        query["$or"] = [
            {"title": {"$regex": search, "$options": 'i'}},
            {"description": {"$regex": search, "$options": 'i'}},
            {"price": {"$regex": search, "$options": 'i'}}
        ]
    
    total_count = collection.count_documents(query)
    transactions = list(collection.find(query).skip((page - 1) * per_page).limit(per_page))
    
    return jsonify({
        "total": total_count,
        "page": page,
        "per_page": per_page,
        "transactions": transactions
    })
