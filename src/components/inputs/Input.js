import React,{useContext} from 'react';
import { InputContext } from '../../context/Context';

function Input() {

    
    const {
        option,
        description,
        amount,
        handleOption,
        handleDescription,
        handleAmount,
        handleSubmit,
    } = useContext(InputContext);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={option} onChange={(e)=>handleOption(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <input
                    type="text"
                    placeholder="add description"
                    value={description}
                    onChange={(e)=>handleDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="add amount"
                    value={amount}
                    onChange={(e)=>handleAmount(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Input;
