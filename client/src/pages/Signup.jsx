import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [formData, setFromData] = useState({});
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // setLoading(true);
        // console.log(JSON.stringify(formData), "hi")
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();

        // setLoading(false);
        // setError(null);
        console.log(data);

        // catch (error) {
        //     setLoading(false);
        //     setError(error.message);
        // }

        navigate('/signin'); 
    };
    console.log(formData);
    return (
        <div className='p-4 max-w-lg mx-auto' >

            <h1 className='text-3xl text-center my-6'> signup</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input type="text" placeholder='username'
                    className='border p-3 rounded-xl' id='username' onChange={handleChange} />
                <input type="text" placeholder='email'
                    className='border p-3 rounded-xl' id='email' onChange={handleChange} />
                <input type="text" placeholder='password'
                    className='border p-3 rounded-xl' id='password' onChange={handleChange} />
                <button type='submit' disabled={false} className=' cursor-pointer bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-80'>
                    {'sign-up'}</button>

            </form>

            <div className='flex gap-2 mt-5'>
                <p>Already have an account ?</p>
                <Link to={'/signin'}>
                    <span className='cursor-pointer text-blue-400 underline opacity-80'>Sign-in</span>
                </Link>
            </div>
            {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
        </div>

    )
}
