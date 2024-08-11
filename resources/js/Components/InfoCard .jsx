import React from 'react';

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="w-fit border-b-2 border-red-400 px-6 py-2 flex items-center space-x-4">
      <div className="text-red-400">{icon}</div>
      <div>
        <h4 className="text-base font-bold text-black">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
