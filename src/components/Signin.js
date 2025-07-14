import React from 'react';

function Signin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Signin</h2>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <input className="mb-4 w-full px-3 py-2 border rounded" type="email" placeholder="Email" />
        <input className="mb-4 w-full px-3 py-2 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;