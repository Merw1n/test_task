import React, { useState } from 'react';

const Calculator = ({money}) => {
  const [quantity, setQuantity] = useState(0);
  const itemPrice = 10;
  const currencyRates = {
    USD: 1,
    EUR: 1.1,
    GBP: 1.4,
    CAD: 1.5,
    AUD: 1.6
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };


  const calculatePrice = () => {
    const price = quantity * itemPrice * currencyRates[money.title];
    return `${price} ${money.title}`;
  };

  return (
    <div className="container" style={{margin: "50px"}}>
      <label>
        Quantity of Gold:
        <input type="number" value={quantity} onChange={handleChangeQuantity} />
      </label>
      <br />
      <br />
      <label>
        Cost in {money.title}:
        <input type="text" value={calculatePrice()} disabled />
      </label>
    </div>
  );
};

export default Calculator;
