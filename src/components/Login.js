import React, { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

  const [isSignInForm, setIsSignUpForm] = useState(true);
  const [errorMessege, SetErrormessege] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignInForm);
  }

  const handlebuttonsClick = () => {
    //validition form form data
    // checkValidData email or password
    // console.log(email);
    const message = checkValidData(email.current.value, password.current.value);
    SetErrormessege(message);

    if (message) return;

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrormessege(errorCode + "-" + errorMessage)

          // ..
        });
    } else {
      //signIn Logic
     
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrormessege(errorCode + "-" + errorMessage)
        });
    }

  }

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
        <form onSubmit={(e) => e.preventDefault()} className="relative p-12 bg-black bg-opacity-60 w-full max-w-sm h-auto min-h-[400px] mx-auto rounded flex flex-col ">
          <h1 className="text-white mx-3 text-2xl font-bold mb-6">{isSignInForm ? "Sign-In " : "Sign-Up"}</h1>

          {!isSignInForm && (<input
            type="text"
            placeholder="Full Name"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded inset-0"
          />)}
          <input
            type="text" ref={email}
            placeholder="Email Address"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded"
          />
          <input
            type="password" ref={password}
            placeholder="Password"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded"
          />
          <p className='text-red-500'>{errorMessege}</p>
          <button
            type="submit"
            className="p-1 m-3 w-full bg-red-700 hover:bg-red-900 text-white text-lg rounded transition duration-300" onClick={handlebuttonsClick}
          >
            {isSignInForm ? " Sign-In" : "Sign-up"}
          </button>
          <div className="flex gap-0">
            <p className='relative z-50 text-white text-left mx-3 opacity-70'>{isSignInForm ? "New to Netflix?" : "IfAlready exit?"}</p>
            <p className='relative z-50 text-white text-leftopacity-70 cursor-pointer ' onClick={toggleSignInForm}>{isSignInForm ? "Sign up now." : "Sign in now."}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
