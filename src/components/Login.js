import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignUpForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignInForm);
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex justify-center items-center min-h-screen pt-32">
        <form className="relative p-12 bg-black bg-opacity-60 w-full max-w-sm h-auto min-h-[400px] mx-auto rounded flex flex-col ">
          <h1 className="text-white mx-3 text-2xl font-bold mb-6">{isSignInForm ? "Sign-In " : "Sign-Up"}</h1>

          {!isSignInForm && (<input
            type="text"
            placeholder="Full Name"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded"
          />)}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-3 w-full bg-slate-900 text-white text-sm rounded"
          />
          <button
            type="submit"
            className="p-1 m-3 w-full bg-red-700 hover:bg-red-900 text-white text-lg rounded transition duration-300"
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
