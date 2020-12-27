import React from 'react';
import Login from '../components/index/Login';
import Header from '../components/index/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-12 lg:mt-32">
        <div className="container mx-auto px-6">
          <div className="w-full lg:flex items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-md lg:text-2xl text-gray-600">Init this new proyect,</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-yellow-500 mb-2 lg:mb-6">World ranks!</h1>
              <p className="text-md lg:text-xl font-light text-gray-800 mb-8">Powerful analytics tools for your business. See the exact keywords for which your competitors rank in organic search and the amount of traffic driven by each of them.</p>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-24">
              <div className="bg-gray-100 shadow-sm rounded-md p-8">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
