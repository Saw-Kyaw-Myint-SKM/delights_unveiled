import React from 'react';

const Rating = ({ rating, totalStars }) => {
  const stars = Array.from({ length: totalStars }, (v, i) => i < rating);

  return (
    <div className="flex items-center">
      {stars.map((isFilled, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={isFilled ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-3 h-3 ${isFilled ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.02 6.174a1 1 0 00.95.691h6.487c.969 0 1.372 1.24.588 1.81l-5.26 3.82a1 1 0 00-.364 1.118l2.02 6.174c.3.921-.755 1.688-1.539 1.118l-5.26-3.82a1 1 0 00-1.176 0l-5.26 3.82c-.784.57-1.838-.197-1.539-1.118l2.02-6.174a1 1 0 00-.364-1.118l-5.26-3.82c-.784-.57-.38-1.81.588-1.81h6.487a1 1 0 00.95-.691l2.02-6.174z"
          />
        </svg>
      ))}
      <span className="ml-2 text-gray-600">({totalStars})</span>
    </div>
  );
};

export default Rating;