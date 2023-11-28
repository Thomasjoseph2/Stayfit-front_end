import React from 'react';
import '../../css/video-shrimmer.css'
const Shimmer = () => {
  return (
    <div className="container mx-auto mt-8 mb-20">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="bg-gray-900 p-4 rounded shadow-lg shimmer-container">
          <div className="shimmer"></div>
          <img
            src="#"
            alt="Shimmer"
            className="w-full h-56 object-cover mb-4"
            style={{ visibility: 'hidden' }} // Hide the actual image, only show shimmer
          />
          <p className="text-gray-300 text-sm"></p>
        </div>
        <div className="bg-gray-900 p-4 rounded shadow-lg shimmer-container">
          <div className="shimmer"></div>
          <img
            src="#"
            alt="Shimmer"
            className="w-full h-56 object-cover mb-4"
            style={{ visibility: 'hidden' }} // Hide the actual image, only show shimmer
          />
          <p className="text-gray-300 text-sm"></p>
        </div>
        <div className="bg-gray-900 p-4 rounded shadow-lg shimmer-container">
          <div className="shimmer"></div>
          <img
            src="#"
            alt="Shimmer"
            className="w-full h-56 object-cover mb-4"
            style={{ visibility: 'hidden' }} // Hide the actual image, only show shimmer
          />
          <p className="text-gray-300 text-sm"></p>
        </div>
        <div className="bg-gray-900 p-4 rounded shadow-lg shimmer-container">
          <div className="shimmer"></div>
          <img
            src="#"
            alt="Shimmer"
            className="w-full h-56 object-cover mb-4"
            style={{ visibility: 'hidden' }} // Hide the actual image, only show shimmer
          />
          <p className="text-gray-300 text-sm"></p>
        </div>
        <div className="bg-gray-900 p-4 rounded shadow-lg shimmer-container">
          <div className="shimmer"></div>
          <img
            src="#"
            alt="Shimmer"
            className="w-full h-56 object-cover mb-4"
            style={{ visibility: 'hidden' }} // Hide the actual image, only show shimmer
          />
          <p className="text-gray-300 text-sm"></p>
        </div>

        <div className="bg-gray-900 p-4 rounded shadow-lg shimmer-container">
          <div className="shimmer"></div>
          <img
            src="#"
            alt="Shimmer"
            className="w-full h-56 object-cover mb-4"
            style={{ visibility: 'hidden' }} // Hide the actual image, only show shimmer
          />
          <p className="text-gray-300 text-sm"></p>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
