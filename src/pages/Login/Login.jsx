import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async(event) => {
    event.preventDefault();
    if(signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState === "Sign Up" ? 
          <input 
            value={name} 
            type='text' 
            placeholder='Your name' 
            onChange={(e) =>setName(e.target.value)}
            />:null}          
          <input 
            value={email} 
            type="email" 
            placeholder='Email' 
            onChange={(e)=>setEmail(e.target.value)} 
          />
          <input 
            value={password} 
            type="password" 
            placeholder='Password' 
            onChange={(e)=>setPassword(e.target.value)} 
          />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? 
          <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign up Now</span></p>
          :
          <p>Already have account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
        }
        </div>
      </div>
    </div>
  )
}

export default Login
