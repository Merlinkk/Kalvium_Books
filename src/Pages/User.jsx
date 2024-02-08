import React from 'react'
import Loader from '../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ConfettiExplosion from 'react-confetti-explosion';
import { Form } from 'react-hook-form';
function User() {
 
    const location = useLocation();
    const formData = location.state.Data

    console.log(formData);

    const [loader, setLoader] = useState(true);
    const [login,setlogin] = useState(true)

    const [isExploding, setIsExploding] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setIsExploding(false);
        }, 3700);
    },[])

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
            
        }, 700);
    }, [login]);

    const navigate = useNavigate();

    const sendHome = () => {
        navigate('/', {state : { Data : formData }});
        // history.push('/user', { Data : data });
      };


  return (
    <div>
        <Navbar back={true} data={formData} login={login}/>
        {loader && <Loader />}
        
        <div className='flex flex-row w-full justify-center'> 
        {!loader && login && 
            <div className='flex flex-col mt-60 p-10 w-fit justify-center items-center shadow bg-white bg-opacity-10'>
                    {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600}/>}
                    <h1 className='text-4xl text-green-600 m-10 font-bold'>Registration Successful</h1>
                    <h1 className='text-3xl font-bold my-10'>User Details</h1>
                    <div className='flex flex-col justify-center text-left'>
                        <span className='text-2xl font-bold'>Name: {formData.name}</span>
                        <span className='text-2xl font-bold'>Email: {formData.email}</span>
                    </div>
                    <button onClick={()=>{setlogin(false)}} className='bg-purple-500 rounded p-4 my-5'>Logout</button>
                    
                    <button className='bg-red-300 rounded-lg p-4' onClick={sendHome}>Back to Home</button>
                    
                    </div>
                    }

                {!loader && !login && 
                <div className='flex flex-col mt-40 justify-center items-center'>
                    <h1 className='text-4xl text-red-600'>You have Logged Out</h1>
                    </div>
                    }
        </div>

        </div>
  )
}

export default User