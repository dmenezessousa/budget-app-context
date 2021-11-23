import React from 'react'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'

function MainList() {
    return (
        <div>
            <IncomeList/>
            <ExpenseList/>
        </div>
    );
};

export default MainList;
