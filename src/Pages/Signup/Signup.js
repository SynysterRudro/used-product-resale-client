import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { emailSignUp, updateName, googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const [signupError, setSignUpError] = useState('');


    const imageHostKey = process.env.REACT_APP_imagebb_key;
    // console.log(imageHostKey);

    // handling google sign in 
    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                setSignUpError('')
                navigate('/');
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err);
                setSignUpError(err.message);
            })
    }


    const handleEmailRegister = data => {
        const image = data.img[0];


        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    saveUser(data.name, data.email, data.role, imgData.data.url);
                }
            })



        emailSignUp(data.email, data.password)
            .then((result) => {
                setSignUpError('');
                updateName(data.name)
                    .then(() => {
                        const user = result.user;
                        console.log(user);
                        // saveUser(data.name, data.email, data.role, userImage);
                        // toast.success('user successfully created');
                        alert('User successfully created');
                        navigate('/');
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err);
                setSignUpError(err.message);
            })
    }

    // user to database 
    const saveUser = (name, email, role, img) => {
        const user = { name, email, role, img };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-bold text-center '>Sign Up</h2>

                <form onSubmit={handleSubmit(handleEmailRegister)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">User photo</span>
                        </label>
                        <input type="file" {...register("img", { required: 'Image is required' })} className="file-input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
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

                    <div>
                        <select className="select select-bordered mt-6 w-full max-w-xs " {...register("role", { required: 'role is required' })}>
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>


                    <input type="submit" className='btn btn-primary w-full mt-4' value='signup' />
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </form>

                <p>Already have an account? <Link className='text-primary' to='/login'>Login</Link></p>

                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='uppercase btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;