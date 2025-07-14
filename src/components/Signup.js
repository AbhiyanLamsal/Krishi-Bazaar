import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <input className="mb-4 w-full px-3 py-2 border rounded" type="text" placeholder="Name" />
          <input className="mb-4 w-full px-3 py-2 border rounded" type="email" placeholder="Email" />
          <input className="mb-4 w-full px-3 py-2 border rounded" type="password" placeholder="Password" />
          <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition" type="submit">
            Register
          </button>
          <p className='text-black-300 text-center'>Already Registered? <Link to="/signin" className="hover:bg-green-300">Sign-In Here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;