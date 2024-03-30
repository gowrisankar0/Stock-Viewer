import React, { useState } from 'react';
import './App.css'; 
import StockDropdown from './components/stockDropDown';

const App = () => {
  const [selectedStock, setSelectedStock] = useState('');
  const [numOfDays, setNumOfDays] = useState(3); // Default value for number of days
  const [currentPage, setCurrentPage] = useState(1); // Default value for current page

  const stocks = [
    {
      stockName: 'Macrosoft',
      info: [
        { date: 'Mar 1, 2024', open: 10, close: 11 },
        { date: 'Mar 2, 2024', open: 12, close: 11 },
        { date: 'Mar 3, 2024', open: 10, close: 5 },
        { date: 'Mar 4, 2024', open: 5, close: 9 },
        { date: 'Mar 5, 2024', open: 10, close: 13 },
        { date: 'Mar 6, 2024', open: 14, close: 7 },
        { date: 'Mar 7, 2024', open: 5, close: 11 },
        { date: 'Mar 8, 2024', open: 10, close: 11 },
        { date: 'Mar 9, 2024', open: 11, close: 10 },
        { date: 'Mar 10, 2024', open: 10, close: 11 },
        { date: 'Mar 11, 2024', open: 11, close: 11 },
      ],
    },
    {
      stockName: 'Doogle',
      info: [
        { date: 'Mar 1, 2024', open: 20, close: 21 },
        { date: 'Mar 2, 2024', open: 21, close: 21 },
        { date: 'Mar 3, 2024', open: 21, close: 21 },
        { date: 'Mar 4, 2024', open: 21, close: 18 },
        { date: 'Mar 5, 2024', open: 17, close: 15 },
        { date: 'Mar 6, 2024', open: 16, close: 15 },
        { date: 'Mar 7, 2024', open: 16, close: 18 },
        { date: 'Mar 8, 2024', open: 22, close: 18 },
        { date: 'Mar 9, 2024', open: 19, close: 19 },
        { date: 'Mar 10, 2024', open: 16, close: 17 },
        { date: 'Mar 11, 2024', open: 17, close: 19 },
      ],
    },
  ];

  // Filter stock data based on selected stock and number of days
  const filteredStock = stocks.find((stock) => stock.stockName === selectedStock);
  const startIndex = (currentPage - 1) * numOfDays;
  const endIndex = startIndex + numOfDays;
  const paginatedData = filteredStock?.info.slice(startIndex, endIndex);

  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
    setCurrentPage(1); // Reset current page when selecting a new stock
  };

  return (
    <div className="App">
      <h1>Stock Viewer</h1>
      <StockDropdown stocks={stocks} onSelectStock={handleSelectStock} />

      <div>
        <label htmlFor="numOfDays">Number of Days:</label>
        <select
          id="numOfDays"
          value={numOfDays}
          onChange={(e) => setNumOfDays(parseInt(e.target.value))}
        >
          <option value={3}>3 Days</option>
          <option value={5}>5 Days</option>
          <option value={10}>10 Days</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData &&
            paginatedData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td className={item.open > item.close ? 'green' : 'red'}>{item.open}</td>
                <td className={item.close > item.open ? 'green' : 'red'}>{item.close}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <button
          disabled={endIndex >= filteredStock?.info.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
