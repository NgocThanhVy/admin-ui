import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from 'assets/styles/Login.module.scss';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const userDefault = {
      username: 'ngoc',
      password: '1',
    };

    const msgError = {
      username: '',
      password: '',
      invaliAccount: '',
    };

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const [messageError, setMessageError] = useState({
      username: '',
      password: '',
      invaliAccount: '',
    });

    console.log('user', user);

    const handleLogin = () => {
        if (user?.username?.trim()?.length === 0 ) {
          msgError.username = " User name is required";
        }
        if (user?.password?.trim()?.length === 0 ) {
          msgError.password = " password is required"
        } else {
          if (
            user?.username?.trim() !== userDefault.username ||
            user?.password?.trim() !== userDefault.password
          ) {
            msgError.invaliAccount = "Incorrect username or password";
          } else {
            localStorage.setItem(
              "userToken",
              "4G02zBeVAt2GMF5aV0P77PeDxoIGKpQhquQkohHcVfQPbVvPkisHs2qAkyq1lcq6"
          );
            setUser({
              ...user,
              username: "",
              password: "",
            });
            navigate("/")
          }
        }
      
         setMessageError({
          ...messageError,
          username: msgError.username,
          password: msgError.password,
          invaliAccount: msgError.invaliAccount,
         });
    }
console.log("message", messageError);
useEffect(() => {
  const userToken = localStorage.getItem("userToken");
  if (!userToken) {
    navigate("/login");
  } else {
    navigate("/");
  }
 }, [])
    return (
        <div className={classes.login}>
            <div className={classes.form}>
                
            <p className={classes.messageError}>{messageError.username}</p>
                    <p className={classes.messageError}>{messageError.password}</p>
                    <p className={classes.messageError}>{messageError.invaliAccount}</p>
                <div className={classes.form__item}>
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        name="username"
                        id="userName"
                        placeholder="Your User Name"
                        value={user.user}
                        onChange={handleChange}
                    />
                    
                </div>
                <div className={classes.form__item}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    
                </div>
                <div className={classes.home}>
                <button type="button" className={classes.form__btn} onClick={handleLogin}>
                    Login
                </button>
                <Link to="/register">Don't have an account? Register</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
