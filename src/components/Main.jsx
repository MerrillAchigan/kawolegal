import React from 'react';
import people from '../assets/people.jpg';

const Main = () => {
  return (
    <section
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${people})` }}
    >
      <div className="absolute inset-0 bg-red-800/70"></div>

      <div className="relative text-center space-y-4 px-6 z-10">
        <h1 className="text-white text-4xl font-bold">Kawo Legal</h1>
        <p className="text-white text-lg max-w-lg">
          A collaborative ecosystem for problem solvers and support for startups.
        </p>
        <button className="text-white px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-lg">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Main;
