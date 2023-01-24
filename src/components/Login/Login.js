import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate('');

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    



    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleForgetPassword = async () => {
       

        if (email) {
            setEmailError('');
            await sendPasswordResetEmail(email);
            toast('Email sent for reset Password');
        }
        else {
            setEmailError("Enter your Email first to reset password");
        }

        

    }
    
   


    


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    const handleUserLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
    }


    return (
        <div className='container mt-5 py-4 bg-light'>
            <h2 className='text-danger text-center mt-4'>Please Login</h2>

            <div className='d-flex justify-content-center'>


                <Form onSubmit={handleUserLogin} className='w-50 '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-danger">{emailError}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>

                    <p>Forget Password?<button onClick={handleForgetPassword}className='btn btn-link text-decoration-none'>Reset Your Password</button></p>

                    <p>Don't have account? <Link to='/signup'>Create New Account</Link> </p>
                    <p className='text-center text-danger'>{error?.message}</p>


                    <Button variant="danger" type="submit">Login</Button>
                </Form>



            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;