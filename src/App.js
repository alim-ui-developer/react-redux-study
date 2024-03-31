// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';
import Login from './component/Login';

function App() {
  // const [ count, setCount ] = useState(0); // reducer에서 사용하기 때문에 App.js에서는 필요 없어짐
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:5}})
    // setCount(count+1);
  }

  const decrease = () => {
    dispatch({type:"DECREMENT"})
  }

  return (
    <div className="App">
      <div className='counterBox'>
        <h1>counter</h1>
        <p className='count'>{count}</p>
        <div className="buttonBox">
          <button onClick={increase}>5씩 증가</button>
          <button onClick={decrease}>1씩 감소</button>
        </div>
        <Box />
      </div>
      <hr/>
      <Login/>
    </div>
  );
}

export default App;
