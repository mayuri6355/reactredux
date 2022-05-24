import logo from './logo.svg';
import './App.css';
import { increseNum, decreseNum} from './actions';
import {useDispatch,useSelector } from 'react-redux'

function App() {
  const dispatch=useDispatch();
  const val=useSelector((state)=>state.upDown)
  return (
    <div className="App">
    <h1>{val}</h1>
    <input type='button' value='Increment' onClick={()=>{dispatch(increseNum())}}></input>
    <input type='button' value='Decrement' onClick={()=>{dispatch( decreseNum())}}></input>
    </div>
  );
}

export default App;
