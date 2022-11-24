import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const googleProvider = new GoogleAuthProvider();

    const { emailSignIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [signInError, setSignInError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleEmailLogin = data => {
        // console.log(data.email, data.password);
        emailSignIn(data.email, data.password)
            .then(result => {
                setSignInError('');
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(err => {
                console.error(err);
                setSignInError(err.message);
            })
    }

    // handling google sign in 
    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                setSignInError('');
                navigate('/');
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err);
                setSignInError(err.message);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center  font-bold'>Login</h2>

                <form onSubmit={handleSubmit(handleEmailLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "email is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: 'password must be 6 characters or more' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strengthen' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message} </p>}
                    </div>


                    <input type="submit" className='btn btn-primary w-full mt-4' value='Login' />
                    {signInError && <p className='text-red-600'>{signInError}</p>}
                </form>

                <p>New here? <Link className='text-primary' to='/signup'>Signup</Link> instead</p>

                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='uppercase btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;