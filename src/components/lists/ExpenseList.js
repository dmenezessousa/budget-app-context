import React,{useContext} from 'react';
import { ListsContext } from '../../context/Context';

function ExpenseList() {
    const {expenseArray,handleDeleteExpense}=useContext(ListsContext);
    return (
        <div>
            <h2>Expense</h2>
            <ul>
                {expenseArray.map((expense,index)=>{
                    return(
                        <li key={index} style={{listStyle: "none"}}>
                        <span>{expense.description} </span>
                        <span>{expense.amount}</span>
                        <button onClick={()=>handleDeleteExpense(index)}>Delete</button>
                </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ExpenseList;
