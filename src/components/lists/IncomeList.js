import React,{useContext} from 'react';
import {ListsContext} from "../../context/Context";

function IncomeList() {
    const {incomeArray,handleDeleteIncome} = useContext(ListsContext);

    return (
        <div>
            <h2>Income</h2>
            <ul>
                {incomeArray.map((income,index)=>{
                    return(
                        <li key={index} style={{listStyle: "none"}}>
                        <span>{income.description} </span>
                        <span>{income.amount}</span>
                        <button onClick={()=>handleDeleteIncome(index)}>Delete</button>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default IncomeList;
