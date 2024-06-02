// import React, { useState } from 'react';
// import classes from "assets/styles/Register.module.scss";
// import { Link, useNavigate } from 'react-router-dom';


// const Register = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState({
//         fullname: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         birthday: '',
//     });
//     const [messageError, setMessageError] = useState("");

//     const handleSignup = () => {
//         if (user?.fullname?.trim()?.length == 0 ||
//             user?.email?.trim()?.length == 0 ||
//             user?.password?.trim()?.length == 0 ||
//             user?.confirmPassword?.trim()?.length == 0 ||
//             user?.birthday?.trim()?.length == 0
//         ) {
//             setMessageError("please full fill data");
//         } else {
//             if (user?.password?.trim() !== user?.confirmPassword?.trim()) {
//                 setMessageError("please password and confirm password don't match");
//             }
//             else {
//                 window.localStorage.setItem("username", user?.fullname?.trim());
//                 window.localStorage.setItem("email", user?.email?.trim());
//                 window.localStorage.setItem("password", user?.password?.trim());
//                 window.localStorage.setItem("confirmpassword", user?.confirmPassword?.trim());
//                 window.localStorage.setItem("birthday", user?.birthday?.trim());
//                 window.localStorage.setItem("status", "sign-up");
//                 navigate("/login");
//                 setUser({
//                     ...user,
//                     fullname: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: '',
//                     birthday: '',
//                 })
//             }
//         }
//     };

//     return (
//         <div className={classes.register}>
//             <form className={classes.form}>
//                 <p className='messageError'>{messageError}</p>
//                 <form>
//                     <h2>Register System</h2>

//                     <div className={classes.form__item}>
//                         <label htmlFor="fullname">Fullname</label>
//                         <input
//                             type="text"
//                             name="fullname"
//                             placeholder="Enter fullname"
//                             value={user?.fullname}
//                             onChange={(event) => {
//                                 setUser({
//                                     ...user,
//                                     fullname: event.target.value,
//                                 })
//                                 setMessageError("");
//                             }}

//                         />

//                     </div>
//                     <div className={classes.form__item}>
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Enter email"
//                             value={user?.email}
//                             onChange={(event) => {
//                                 setUser({
//                                     ...user,
//                                     email: event.target.value,
//                                 })
//                                 setMessageError("");
//                             }}

//                         />

//                     </div>
//                     <div className={classes.form__item}>
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Enter password"
//                             value={user?.password}
//                             onChange={(event) => {
//                                 setUser({
//                                     ...user,
//                                     password: event.target.value,
//                                 })
//                                 setMessageError("");
//                             }}

//                         />

//                     </div>
//                     <div className={classes.form__item}>
//                         <label htmlFor="confirmPassword">Confirm Password</label>
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="Confirm password"
//                             value={user?.confirmPassword}
//                             onChange={(event) => {
//                                 setUser({
//                                     ...user,
//                                     confirmPassword: event.target.value,
//                                 })
//                                 setMessageError("");
//                             }}

//                         />

//                     </div>
//                     <div className={classes.form__item}>
//                         <label htmlFor="birthday">Birthday</label>
//                         <input
//                             type="date"
//                             name="birthday"
//                             value={user?.birthday}
//                             onChange={(event) => {
//                                 setUser({
//                                     ...user,
//                                     birthday: event.target.value,
//                                 })
//                                 setMessageError("");
//                             }}
//                         />

//                     </div>
//                     <div className={classes.home}>
//                         <button className={classes.form__btn} type='button' onClick={handleSignup}>Register</button>
//                         <Link to="/login">If have account? Login</Link>
//                     </div>
//                 </form>
//             </form>
//         </div>

//     );
// };


// export default Register;
