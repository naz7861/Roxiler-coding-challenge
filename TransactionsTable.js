import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsTable = ({ month, search, page, setPage }) => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const perPage = 10;

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get(`/transactions`, {
        params: { month, search, page, per_page: perPage },
      });
      setTransactions(response.data.transactions);
      setTotal(response.data.total);
    };
    fetchTransactions();
  }, [month, search, page]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.transactionId}>
              <td>{transaction.transactionId}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.dateOfSale}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <button onClick={() => setPage(page + 1)} disabled={page * perPage >= total}>Next</button>
      </div>
    </div>
  );
};

export default TransactionsTable;
