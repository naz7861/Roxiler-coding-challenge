@app.route('/combined', methods=['GET'])
def get_combined_data():
    month = request.args.get('month')
    
    # Fetch statistics
    statistics = get_statistics().get_json()
    
    # Fetch bar chart data
    bar_chart_data = get_barchart_data().get_json()
    
    # Fetch pie chart data
    pie_chart_data = get_piechart_data().get_json()
    
    return jsonify({
        "statistics": statistics,
        "bar_chart": bar_chart_data,
        "pie_chart": pie_chart_data
    })
