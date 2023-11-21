import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {setNewBudget(budget);}, [budget]);

    const handleBudgetChange = (event) => {
        const inputValue = parseInt(event.target.value, 10);
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if(inputValue>20000){
            alert("Budget cannot exceed 20000!")
        }
        else if (inputValue<totalExpenses) {
            alert("Budget cannot be less than total expenses!")
        }else{
            setNewBudget(inputValue);
        }
    };

    const updateBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={updateBudget}></input>
            </span>
        </div>
    );
};

export default Budget;
