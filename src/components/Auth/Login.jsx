import React, { useState } from 'react';

const Login = () => {
  // two way binding: email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(`email: ${email}, password: ${password}`);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-4xl font-bold text-emerald-600 mb-10">Employee Task Management App</h1>
      
      <div className="border-2 border-emerald-600 rounded-xl bg-black shadow-lg">
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center justify-center p-10 space-y-8">
          <input required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="rounded-full px-5 text-xl py-3 outline-none bg-transparent text-white border-2 border-emerald-600 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
            type="email"
            placeholder="Enter your email"
          />
          <input required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="rounded-full px-5 text-xl py-3 outline-none bg-transparent text-white border-2 border-emerald-600 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-600 transition-all duration-300"
            type="password"
            placeholder="Enter your password"
          />
          <button className="rounded-full px-20 py-3 text-xl text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300 shadow-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
