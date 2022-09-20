//mport logo from './logo.svg';
import './App.css';
import {useReducer} from 'react';

const initialState=0;
const reducer=(state,action)=>{
    switch (action){
        case "add":
            return state+1;
        case "sub":
            return state -1;
        default:
            throw new Error('Unexpected Error');
    }

}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div className="App">
      <span id="counter">{count}</span>
      <div>
        <button id="increment-btn" onClick={()=>dispatch('add')}>Inc</button>
        <button id="decrement-btn" onClick={()=>dispatch('sub')}>Dec</button>
      </div>
    </div>
  );
}

export default App;
