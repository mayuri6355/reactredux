import logo from './logo.svg';
import './App.css';
import { increseNum, decreseNum} from './actions';
import {useDispatch,useSelector } from 'react-redux'

import React from 'react';
import { Counter } from '../src/features/counter/Counter'


function App() {
  const dispatch=useDispatch();
  const val=useSelector((state)=>state.upDown)
  return (
    <div className="App">
    {/* <h1>{val}</h1>
    <input type='button' value='Increment' onClick={()=>{dispatch(increseNum())}}></input>
    <input type='button' value='Decrement' onClick={()=>{dispatch( decreseNum())}}></input> */}

    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
