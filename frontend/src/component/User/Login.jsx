import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { clearErrors, login, } from "../../actions/userAction";
import { Link } from 'react-router-dom';
import './login.css'

const Login = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  return (
    <div>
      {loading ? (<Loader/>) : (
        <div className='login'>
          <div className='login_container'>
            <h1>Welcome User,</h1>
            <p>Please Enter Your Details</p>
            <form className='login_form' onSubmit={loginSubmit}>
            <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
            <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
            />
             <Link to="/password/forgot" className='forget'>Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
            </form>
            <div className="login_end">
            <div className="ques">Don't have an account?</div>
            <Link className="sugg" to="/signup">Create An Account</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
