import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ month }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/piechart`, { params: { month } });
      setData(response.data);
    };
    fetchData();
  }, [month]);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Categories',
        data: Object.values(data),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
