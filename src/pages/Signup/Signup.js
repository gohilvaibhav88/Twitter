
import React, { useState } from 'react'
import XIcon from '@mui/icons-material/X';
import auth from '../../firebase.init.js'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth' 
import GoogleButton from 'react-google-button'
import {Link, useNavigate} from 'react-router-dom'

import TwitterImage from '../../Assets/Images/TwitterImage.jpg'

const Signup = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [username , setUsername] = useState('');
    const [name , setName] = useState('');
    const navigate = useNavigate();
   
   


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      if(user || googleUser){
        navigate('/');
        console.log(user);
        console.log(googleUser)
      }
      if(error){
        console.log(error.message);
        
      }
      if(loading){
        console.log('loading...')
      }
    
    const handleSubmit = e =>{
      e.preventDefault();
      console.log(email,password);
      createUserWithEmailAndPassword(email,password);
      
    }

    const handleGoogleSignIn=()=>{
      signInWithGoogle();
    }



  return (
    <div className="login-container">
      <div className='image-container'>
            <img className='image' src={TwitterImage} alt=''/>
      </div>
      <div className='form-container'>
        <div className='form-box'>
        <XIcon className='Twittericon' style={{color:'white'}}/>
        <h2 className='heading'>Happening Now</h2>
        <h3 className='heading1'>Join Twitter Today</h3>
        <form onSubmit={handleSubmit}>
            <input className='display-name' type='text' placeholder='@username' onChange={(e)=>setUsername(e.target.value)}/>
            <input className='display-name' type='text' placeholder='Enter full name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className='display-name' type='email' placeholder='Email Address' onChange={(e)=> setEmail(e.target.value)}/>
            <input className='display-name' type='password' placeholder ='Password' onChange={(e)=> setPassword(e.target.value)} />
            <div className='btn-login'>
                <button type='submit' className='btn'>Signup</button>
            </div>
        </form>
        </div>
        
        <hr/>
        <div className="google-button">
        <GoogleButton className='g-btn' type='light' 
          onClick={handleGoogleSignIn}
/>
        </div>
        <div>
          Already have an account?
          <Link to='/login' style={{textDecoration:'none' , color:'blue', fontWeight:'600' ,marginLeft:'5px'}}>Signup</Link>
        </div>
        </div>
      </div>
    
  )
}

export default Signup
