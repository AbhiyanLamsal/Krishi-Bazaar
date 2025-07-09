import React from 'react';
function Home() {
  return (
    <><div className="fixed w-full h-[700px] mt-10">
          <img
              src="https://wallpaperaccess.com/full/1164298.jpg"
              alt="Krishi Bazaar Logo"
              className="w-full h-full object-cover bg-fixed" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Welcome to Krishi Bazaar</h1>
              <p className="text-lg md:text-2xl text-white mb-2">Your one-stop shop for all agricultural needs.</p>
              <p className="text-white text-2xl ml-20 mb-10 mr-20 text-center">
                  Explore our wide range of products, from seeds to tools, and everything in between.
                  We are committed to supporting farmers and promoting sustainable agriculture. Join us in our mission to empower farmers and enhance agricultural productivity.
              </p>
          </div>
      </div></>
  );
}

export default Home;