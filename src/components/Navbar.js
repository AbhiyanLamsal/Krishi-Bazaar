import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-green-600 px-4 py-3 fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"><a href="/">Krishi Bazaar</a></div>
        <ul className="flex space-x-10">
          <li><a href="/" className="text-white transition hover:bg-green-300 p-2">Home</a></li>
          <li><a href="/about" className="text-white transition hover:bg-green-300 p-2">About</a></li>
          <li><a href="/partnerwithus" className="text-white transition hover:bg-green-300 p-2">Patner with us</a></li>
          <li><a href="/shop" className="text-white transition  hover:bg-green-300 p-2">Shop</a></li>
          <li><Link to="/signup" className="text-white transition  hover:bg-green-300 p-2">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;