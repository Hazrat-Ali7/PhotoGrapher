import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';



const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    
    const [updateProfile, updating] = useUpdateProfile(auth);
    

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      

    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || updating) {
        return <Loading></Loading>
    }


    const handleCreateUser = async event =>{
        event.preventDefault();
        
       await createUserWithEmailAndPassword(email, password)
       await updateProfile({displayName:name})
       toast('An Email Verification is Sent & Updated Profile')
        

        if(password.length <6){
            setError('Password Must be 6 Character')
        }
        
    }  



    return (
        <div className='container mt-5 py-4 bg-light'>
            <h2 className='text-danger text-center mt-4'>Please Sign Up</h2>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={handleCreateUser} className='w-50 '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Enter Your Password" required />
                    </Form.Group>

                    <p>Already have an account? <Link to='/login'>Please Login</Link> </p>
                    <p className='text-danger text-center'>{error1?.message}</p>
                    <Button variant="danger" type="submit">Sign Up</Button>
                </Form>

            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;