import React, { useState }  from 'react';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";


function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [mobileNo, setMobileNo] = useState();
    const [dob, setDob] = useState('');
    const [location,setLocation] = useState('None');
    const [pwd, setPwd] = useState('');
    const [conPwd, setConPwd] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleMailChange = (e) => {
        setMail(e.target.value);
    }

    const handleMobileNoChange = (e) => {
        setMobileNo(e.target.value);
    }

    const handleDobChange = (e) => {
        setDob(e.target.value);
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handlePwdChange = (e) => {
        setPwd(e.target.value);
    }

    const handleConfirmPwdChange = (e) => {
        setConPwd(e.target.value);
    }


    const handleregister = () => {
        if(pwd===conPwd)
        {
            alert("Registered Successfully");
            localStorage.setItem('pwd', pwd);
            localStorage.setItem('mail', mail)
        }
        else{
            alert("Password mismatched");
        }
        setFirstName('');
        setLastName('');
        setMail('');
        setMobileNo('');
        setDob('');
        setLocation('None');
        setPwd('');
        setConPwd('');
    }

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    mail: '',
                    mobileNo: '',
                    dob: '',
                    password: '',
                    confirmPassword: ''
                }}
            >
                {formik => (
                    <div>
                        <h1 className='my-4 font-weight-bold-display-4 head1'>REGISTER FORM</h1>
                        {console.log(formik)}
                        <Form>
                            <div className='mb-2 form-group'>
                                <label>First Name</label>
                                <input type='text'  className='form-control shadow-none' value={firstName} onChange={handleFirstNameChange}  required/>
                            </div>
                            <div className='mb-2'>
                                <label>Last Name</label>
                                <input type='text'  className='form-control shadow-none' value={lastName} onChange={handleLastNameChange} required/>
                            </div>
                            <div className='mb-2'>
                                <label>E-mail ID</label>
                                <input type='mail'  className='form-control shadow-none' value={mail} onChange={handleMailChange} required/>
                            </div>
                            <div className='mb-2'>
                                <label>Mobile Number</label>
                                <input type='tel'  className='form-control shadow-none' value={mobileNo} pattern="[0-9]{10}" onChange={handleMobileNoChange} required/>
                            </div>
                            <div className='mb-2'>
                                <label>Date Of Birth</label>
                                <input type='date'  className='form-control shadow-none' value={dob} onChange={handleDobChange} required/>
                            </div>
                            <div className='mb-2'>
                                <label>Location</label>
                                <select id="cars" name="cars"  className='form-control shadow-none' onChange={handleLocation}>
                                    <option value="None">None</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Bangalore">Bangalore</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <label>Password</label>
                                <input type='password'  className='form-control shadow-none' value={pwd} onChange={handlePwdChange} required/>
                            </div>
                            <div className='mb-2'>
                                <label>Confirm Password</label>
                                <input type='password' className='form-control shadow-none' value={conPwd} onChange={handleConfirmPwdChange} required/>
                            </div>
                            <div>
                                <button className='btn btn-dark mt-3' onClick={handleregister} >Register</button>
                            </div>
                            <div>
                            <p>Are you want to <Link to="/login">login</Link> ?</p>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Register
