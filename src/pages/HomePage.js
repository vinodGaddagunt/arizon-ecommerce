import React from 'react';


import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => {
  return (
    <div>
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold text-center">Welcome to Arizon E-commerce</h1>
        <p className="text-center text-gray-600 mt-4">Shop the best products at amazing prices.</p>
        <FeaturedProducts /> 
      </main>
      
    </div>
  );
};

export default HomePage;
