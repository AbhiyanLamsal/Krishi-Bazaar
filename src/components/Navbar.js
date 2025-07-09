import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-green-700 px-4 py-3 fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Krishi Bazaar</div>
        <ul className="flex space-x-10">
          <li><a href="/" className="text-white hover:text-green-200 transition">Home</a></li>
          <li><a href="/about" className="text-white hover:text-green-200 transition">About</a></li>
          <li><a href="/contact" className="text-white hover:text-green-200 transition">Contact</a></li>
          <li><a href="/products" className="text-white hover:text-green-200 transition">Products</a></li>
          <li><Link to="/signup" className="text-white hover:text-green-200 transition">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;