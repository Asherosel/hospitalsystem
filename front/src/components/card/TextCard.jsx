import React from 'react';

const TextCard = ({ title, data }) => {
  const entries = data
    ? Object.entries(data)
    : [];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1">
      <h2 className="text-xl text-blue-500 font-semibold mb-8">{title}</h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10 flex-grow overflow-auto">
        {entries.map(([key, value]) => (
          <div key={key} className="break-words">
            <p className="font-semibold capitalize">{key}:</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextCard;
