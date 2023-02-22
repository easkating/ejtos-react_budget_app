import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
var Budget = () => {
    let { budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <label for="budget">Budget: {currency} </label> 
            <input
                required='required'
                type='number'
                id='Nbudget'
                value={budget}
                step="10"                
                >
            </input>

        </div>
    );
};
export default Budget;
