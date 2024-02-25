import React, { useState } from 'react'
import XIcon from '@mui/icons-material/X';
import auth from '../../firebase.init.js';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import TwitterImage from '../../Assets/Images/TwitterImage.jpg'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user || googleUser){
        navigate('/');
        console.log(user);
        console.log(googleUser);
      }
      if(error){
        console.log(error.message)

      }
      if(loading){
        console.log('loading...')
      }


      const handleGoogleSignIn=()=>{
        signInWithGoogle();
      }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
        
    };

    

    return (
        <>
            <div className="login-container">
                <div className="image-container">
                    { <img className="image" src={TwitterImage} alt="twitterImage" /> }
                </div>

                <div className="form-container">
                    <div className="form-box">
                        <XIcon style={{ color: "skyblue" }} />
                        <h2 className="heading" style={{ color: 'black' }}>Happening now</h2>

                        {error && <p>{error.message}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className='input-container'>
                            <input
                                type="email"
                                className="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                className="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            
                                <button type="submit" className="btn">
                                    Log In
                                </button>
                            </div>
                            
                        </form>
                        <hr />
                        
                        <div>
                            <GoogleButton
                                className="g-btn"
                                type="light"
                            onClick={handleGoogleSignIn}
                            />
                        </div>

                        
                            <p style={{ color: 'black' }}>Don't have an account?</p>
                            <Link clasName='signup-link'
                                to="/signup"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    fontWeight: "600",
                                    marginLeft: "5px",
                                }}
                            >
                                Sign up
                            </Link>
                        
                        
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;
