import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  let idRef = useRef(null);
  let pwdRef = useRef(null);
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);
  const dispatch = useDispatch();
  const [ warningText, setWarningText ] = useState('');

  const login = () => {
    let idValue = idRef.current.value;
    let pwdValue = pwdRef.current.value;

    if(idValue === '' && pwdValue === ''){
      setWarningText('아이디와 비밀번호를 입력해주세요!');
      return;
    }
    else if(idValue === ''){
      setWarningText('아이디를 입력해주세요!');
      return;
    }
    else if(pwdValue === ''){
      setWarningText('비밀번호를 입력해주세요');
      return;
    }

    dispatch({type:"LOGIN", payload:{id:idValue, password:pwdValue}})
  }

  return (
    <div className='loginBox'>
      <h1>login</h1>
      {id !== '' && 
        <p>{id}님 환영합니다!</p>
      }
      <div>
        <p>
          <label htmlFor="id">ID</label>
          <input type="text" id="id" ref={idRef} />
        </p>
        <p>
          <label htmlFor="pw">PW</label>
          <input type="password" id="pw" ref={pwdRef} />
        </p>
        <p className="warning">{warningText}</p>
        <button onClick={login}>login</button>
      </div>
    </div>
  )
}

export default Login