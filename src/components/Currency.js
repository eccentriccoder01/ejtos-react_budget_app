import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('');
    const handleCurrencyChange = (event) => {
            setNewCurrency(event.target.value);
    };
    const updateCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    };
    return (
    <div className="input-group">
    <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
    </div>
    <select className="custom-select" id="inputGroupSelect01" onChange={handleCurrencyChange} onBlur={updateCurrency}>
          <option value="£" defaultValue>Pound(£)</option>
          <option value="€">Euro(€)</option>
          <option value="$">USD($)</option>
    </select>
    </div>
  )
}

export default Currency
