import React, { useState } from 'react';
import classes from 'assets/styles/Form.module.scss';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { createUser } from 'store/userSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        address: '',
        birthday: '',
        department: '',
    });

    const msgError = {
        firstName: '',
        lastName: '',
        address: '',
        birthday: '',
        department: '',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        setMessageError({
            ...messageError,
            firstName: '',
            lastName: '',
            address: '',
            birthday: '',
            department: '',
        });
    };


    const [messageError, setMessageError] = useState({
        firstName: '',
        lastName: '',
        address: '',
        birthday: '',
        department: '',
    });

   

    
    const handleSubmit = () => {
        

        if (!user.firstName.trim().length === 0) {
            msgError.firstName = 'First name is required';
        }
        if (!user.lastName.trim().length === 0) {
            msgError.lastName = 'Last name is required';
        }
        if (!user.address.trim().length === 0) {
            msgError.address = 'Address is required';
        }
        if (!user.birthday.trim().length === 0) {
            msgError.birthday = 'Birthday is required';
        }
        if (!user.department.trim().length === 0) {
            msgError.department = 'Department is required';
        } 
    
            setUser({
                ...user,
                firstName: '',
                lastName: '',
                address: '',
                birthday: '',
                department: '',
            });

            setMessageError({
                ...messageError,
                firstName: msgError.firstName,
                lastName: msgError.lastName,
                address: msgError.address,
                birthday: msgError.birthday,
                department: msgError.department,
            });

            if(
                !!user.firstName.trim() &&
                !!user.lastName.trim() &&
                !!user.address.trim() &&
                !!user.birthday.trim() &&
                !!user.department.trim() 

            ) {
                const userNew = {
                    ...user,
                    id: nanoid(10),
                };
                dispatch(createUser(userNew))
                navigate("/");
                console.log("created user", createUser(user));
            }
           
    };

    return (
        <div className={classes.form}>
            <div className={classes.user__detail}>
                <div className={classes.user__detail__item}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        name='firstName'
                        placeholder='Enter your first name'
                        value={user.firstName}
                        onChange={handleChange}
                    />
                    <p className={classes.messageError}>{messageError.firstName}</p>
                </div>
                <div className={classes.user__detail__item}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Enter your last name'
                        value={user.lastName}
                        onChange={handleChange}
                    />
                    <p className={classes.messageError}>{messageError.lastName}</p>
                </div>
                <div className={classes.user__detail__item}>
                    <label htmlFor='address'>Address</label>
                    <textarea
                        name='address'
                        id='address'
                        cols='20'
                        rows='5'
                        placeholder='Enter your address'
                        value={user.address}
                        onChange={handleChange}
                    ></textarea>
                    <p className={classes.messageError}>{messageError.address}</p>
                </div>
                <div className={classes.user__detail__item}>
                    <label htmlFor='birthday'>Birthday</label>
                    <input
                        type='date'
                        name='birthday'
                        id='birthday'
                        value={user.birthday}
                        onChange={handleChange}
                    />
                    <p className={classes.messageError}>{messageError.birthday}</p>
                </div>
                <div className={classes.user__detail__item}>
                    <label htmlFor='department'>Department</label>
                    <select
                        name='department'
                        id='department'
                        value={user.department}
                        onChange={handleChange}
                    >
                        <option value=''>Select your department</option>
                        <option value='vti'>VTI Group</option>
                        <option value='fsoft'>FPT Software</option>
                        <option value='framgia'>Framgia</option>
                        <option value='samsung'>Samsung</option>
                    </select>
                    <p className={classes.messageError}>{messageError.department}</p>
                </div>
                <div className={classes.user__detail__item}>
                    <button type='button' onClick={handleSubmit}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
