import React from "react";

const ConvertBlock = ({ data, value, onChangeValue, setCurrency, currencies }) => {
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="block">
      <input
        type="number"
        className="input"
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
      />
      <select value={currencies} onChange={handleChange}>
        {data.map((option) => (
          <option key={option.currency}>{option.currency}</option>
        ))}
      </select>
    </div>
  );
};

export default ConvertBlock;
