import React, { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [isSignInForm, setIsSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Creating refs for form inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null); // Ref for the name input, used only in the sign-up form
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignInForm);
  };

  const handleButtonsClick = () => {
    // Getting values from refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : ''; // Check if nameRef exists before accessing its value

    const message = checkValidData(email, password);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign-up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name}) // Update profile with display name
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
    
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName }));
   
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex justify-center items-center min-h-screen pt-32">
        <form onSubmit={(e) => e.preventDefault()} className="relative p-12 bg-black bg-opacity-60 w-full max-w-sm h-auto min-h-[400px] mx-auto rounded flex flex-col">
          <h1 className="text-white mx-3 text-2xl font-bold mb-6">{isSignInForm ? "Sign-In " : "Sign-Up"}</h1>

          {!isSignInForm && (
            <input
              type="text"
              ref={nameRef} // Reference for the name input
              placeholder="Full Name"
              className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded inset-0"
            />
          )}
          <input
            type="text"
            ref={emailRef} // Reference for the email input
            placeholder="Email Address"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded"
          />
          <input
            type="password"
            ref={passwordRef} // Reference for the password input
            placeholder="Password"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded"
          />
          <p className='text-red-500'>{errorMessage}</p>
          <button
            type="submit"
            className="p-1 m-3 w-full bg-red-700 hover:bg-red-900 text-white text-lg rounded transition duration-300"
            onClick={handleButtonsClick} // Handling button click
          >
            {isSignInForm ? "Sign-In" : "Sign-up"}
          </button>
          <div className="flex gap-0">
            <p className='relative z-50 text-white text-left mx-3 opacity-70'>{isSignInForm ? "New to Netflix?" : "Already have an account?"}</p>
            <p className='relative z-50 text-white text-left opacity-70 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign in now."}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
