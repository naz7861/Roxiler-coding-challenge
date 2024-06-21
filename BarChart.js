import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ month }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/barchart`, { params: { month } });
      setData(response.data);
    };
    fetchData();
  }, [month]);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Number of Items',
        data: Object.values(data),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
