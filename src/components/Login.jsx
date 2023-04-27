import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig.js"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import NavBar from './NavBar.jsx';

const Login = () => {
  initializeApp(firebaseConfig);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkLogin, setCheckLogin] = useState('')
  const [checkSignUp, setCheckSignUp] = useState('')

  const location = useLocation();
  const page = location.pathname === "/login" ? true : false;
  const navigate = useNavigate();
  const auth = getAuth()

  const FormOnClick = (event) => {
    event.preventDefault()
    if (page) {
      signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
          if (auth) {
            navigate('/dashboard')
          }
        })
        .catch((error) => setCheckLogin(error.message))
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {
          if (auth) {
            navigate('/dashboard')
          }
        })
        .catch((error) => setCheckSignUp(error.message))
    }
  }

  useEffect(() => {
    setCheckLogin("")
    setCheckSignUp("")
  }, [location])

  return (
    <div className="login_form">
      <NavBar />
      <div className="login">
        <section className='login_main'>
          <form action="">
            <h2>{page ? "Login" : "Sign Up"}</h2>
            <div className="inp">
              <input type="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />

              <input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />

              <button className='login_btn' onClick={FormOnClick}>{page ? "Login" : "Register"}</button>
            </div>
            {page &&
              <div className="form-check login_check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                <label className="form-check-label" htmlfor="invalidCheck2">
                  Remember Me
                </label>
              </div>}

             <div className="user-exits"><p>{checkLogin}</p></div>
             <div className="user-exits"><p>{checkSignUp}</p></div>

            <p className='signup'> {page ? "New on Netflix? " : "Already have account? "}
              <Link to={page ? "/register" : "/login"}>{page ? "Sign Up" : " Login"}</Link></p>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Login