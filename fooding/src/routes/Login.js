import React from 'react';
import axios from 'axios';
import '../scss/login.scss';
import { setCookie } from '../cookie';


const Login = () => {
  const onLogin = (e) => {
    e.preventDefault()
    const id = e.target.user_id.value;
    const pwd = e.target.user_pwd.value;
    axios.post('/login',{id,pwd})
    .then(()=>{
      setCookie('login',id);
      console.log('로그인');      
    })
    .catch((error)=>{
      console.error(error);
      console.log('전송오류입니다.');
    })
  }
  return(
    <>
      <form onSubmit={onLogin} class="Loginid">
        <h2>로그인</h2>
        <input type="text" id='user_id' placeholder='아이디'/>
        <input type="password" id='user_pwd' placeholder='비밀번호'/>
        <div>
          <label id="che">
            <input type="checkbox"></input>아이디 저장
          </label>
            <a href=''><li>아이디 찾기</li></a>
            <a href=''><li>비밀번호 찾기</li></a>
            <a href=''><li>회원가입</li></a>
        </div>
        <button type='submit'>로그인</button>
      </form>
    </> 
  )
}

export default Login; 