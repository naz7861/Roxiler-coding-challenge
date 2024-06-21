import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await axios.get(`/statistics`, { params: { month } });
      setStatistics(response.data);
    };
    fetchStatistics();
  }, [month]);

  return (
    <div>
      <h3>Statistics for {month}</h3>
      <p>Total Sales Amount: {statistics.total_sales_amount}</p>
      <p>Total Sold Items: {statistics.total_sold_items}</p>
      <p>Total Not Sold Items: {statistics.total_not_sold_items}</p>
    </div>
  );
};

export default Statistics;
