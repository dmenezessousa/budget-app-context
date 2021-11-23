import React,{useState,useEffect} from 'react';
import Header from './components/header/Header';
import Input from './components/inputs/Input';
import MainList from './components/lists/MainList';
import {InputContext,HeaderContext,ListsContext} from "./context/Context";

import './App.css';


function App() {

  const [income, setIncome] = useState(storeHeaders("income"));
  const [expense, setExpense] = useState(storeHeaders("expense"));

  const [option, setOption] = useState("+");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const [incomeArray, setIncomeArray] = useState(storeInputs("incomeArray"));
  const [expenseArray, setExpenseArray] = useState(storeInputs("expenseArray"));

  function storeInputs (value){
    return window.localStorage.getItem(value)
    ? JSON.parse(window.localStorage.getItem(value)): [];
  };

  function storeHeaders(value){
    return window.localStorage.getItem(value)
    ? Number(window.localStorage.getItem(value)):0;
  };

  function setLocalStorage (){
    window.localStorage.setItem("income",income);
    window.localStorage.setItem("expense",expense);
    window.localStorage.setItem("incomeArray",JSON.stringify(incomeArray));
    window.localStorage.setItem("expenseArray",JSON.stringify(expenseArray));
  };

  useEffect(() => {
      setLocalStorage();
  }, [income,expense,incomeArray,expenseArray])

  

  function handleOption(value){
    setOption(value)
  };
  function handleDescription(value){
    setDescription(value)
  };
  function handleAmount(value){
    setAmount(value)
  };
  function handleSubmit(e){
    e.preventDefault();
    if(amount === 0) return;
    if(option === "+"){
      setIncome(income + parseFloat(amount));
      setIncomeArray([...incomeArray,{description,amount}]);
    }else{
      setExpense(expense + parseFloat(amount));
      setExpenseArray([...expenseArray,{description,amount}]);
    }
    reset();
  };

  function handleDeleteIncome(index){
    let deleteIncomeItem = incomeArray[index]
    setIncome(income - deleteIncomeItem.amount);

    let newIncomeArray = Object.assign([], incomeArray);
    newIncomeArray.splice(index,1);
    setIncomeArray(newIncomeArray)    
  };

  function handleDeleteExpense(index){
    let deleteExpenseItem = expenseArray[index];
    setExpense(expense - deleteExpenseItem.amount);

    let newExpenseArray = Object.assign([],expenseArray);
    newExpenseArray.splice(index,1);
    setExpenseArray(newExpenseArray);
  };

  function reset(){
    setAmount(0);
    setDescription("");
  };
  const headerContextValue = {
    income,
    expense
  };

  const inputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit,
  };

  const listsContextValue = {
    expenseArray,
    incomeArray,
    handleDeleteIncome,
    handleDeleteExpense,
  };


  return (
    <div className="App">

      <HeaderContext.Provider value={headerContextValue}>
        <Header/> 
      </HeaderContext.Provider>

      <InputContext.Provider value={inputContextValue}>
        <Input/>
      </InputContext.Provider>

      <ListsContext.Provider value={listsContextValue} >
        <MainList/>  
      </ListsContext.Provider>        
    </div>
  );
};

export default App;
