import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import LoginPage from './login_page';



function Login() {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    //const navigate = useNavigate();


    const handlePasswordType = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    function handleMailChange(e) {
        setMail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    const mailCheck = localStorage.getItem('mail');
    const pwdcheck = localStorage.getItem('pwd');

    function handleLogin() {
        if ((mailCheck === mail) && (pwdcheck === password)) {
            localStorage.setItem('loginMail', mail);
            localStorage.setItem('loginPassword', password)
            alert("Login successfully");
        }
        else {
            alert("Invalid Login");
        }
    }

    return (
        <div className='login'>
            <Formik
                initialValues={{
                    mail: '',
                    password: ''
                }}
            >
                {formik => (
                    <div>
                        <h1 className='my-4 font-weight-bold-display-4 head2'>LOGIN FORM</h1>
                        <div>
                            <Form>
                                <div className='mb-2 form-group'>
                                    <label>E-mail : </label>
                                    <input type='mail' value={mail} className='form-control shadow-none' placeholder='Enter the mail id' onChange={handleMailChange} required />
                                </div>

                                <div className='mb-2 form-group'>
                                    <label>password : </label>
                                    <input type={passwordType} className='form-control shadow-none' value={password} onChange={handlePassword} required />
                                    <button onClick={handlePasswordType}>{passwordType === "password" ? 'show' : 'hide'}</button>
                                </div>

                                <div className='mb-2 form-group'>
                                    <button
                                        className='btn btn-dark'
                                        onClick={handleLogin}
                                        >
                                    <Link to="/login_page">login</Link>
                                </button>
                        </div>

                    </Form>
                        </div>

                    </div >
                )
}
            </Formik >
        </div >

    )
}

export default Login;