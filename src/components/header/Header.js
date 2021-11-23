import React,{useContext}from 'react';
import { HeaderContext } from '../../context/Context';

function Header() {
    const {income,expense} = useContext(HeaderContext);

    return (
        <div>
            <h1>Current Budget</h1>
            <p>Total: ${income - expense}</p>
            <br/>
            <p>Income: ${income}</p>
            <p>expense: ${expense}</p>
        </div>
    );
};

export default Header;
