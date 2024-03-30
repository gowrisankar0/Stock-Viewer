

import React from 'react';

const StockDropdown = ({ stocks, onSelectStock }) => {
  const handleStockChange = (e) => {
    const selectedValue = e.target.value;
    onSelectStock(selectedValue);
  };

  return (
    <div className="select-wrapper">
      <select onChange={handleStockChange}>
        <option value="">-- Select Stock --</option>
        {stocks.map((stock, index) => (
          <option key={index} value={stock.stockName}>
            {stock.stockName}
          </option>
        ))}
      </select>
      <div className="dropdown-menu">
        {stocks.map((stock, index) => (
          <div key={index}>{stock.stockName}</div>
        ))}
      </div>
    </div>
  );
};

export default StockDropdown;
