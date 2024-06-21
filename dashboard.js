import React, { useState } from 'react';
import TransactionsTable from './TransactionsTable';
import Statistics from './Statistics';
import BarChart from './BarChart';

const Dashboard = () => {
  const [month, setMonth] = useState('March');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div>
      <h1>Transaction Dashboard</h1>
      <div>
        <label>Month: </label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Search: </label>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <TransactionsTable month={month} search={search} page={page} setPage={setPage} />
      <Statistics month={month} />
      <BarChart month={month} />
    </div>
  );
};

export default Dashboard;

