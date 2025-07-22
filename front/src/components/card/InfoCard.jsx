import React from 'react';
import { FaEdit } from 'react-icons/fa'; // Kalem ikonu

const InfoCard = ({ title, data, onEdit }) => {
  const entries = data ? Object.entries(data) : [];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl text-blue-500 font-semibold">{title}</h2>
        <button
          onClick={onEdit}
          className="flex items-center border-2 bg-white  border-blue-600 rounded-xl p-1 gap-1 text-sm text-blue-600 hover:text-white cursor-pointer hover:bg-blue-600 font-medium"
        >
          <FaEdit className="w-4 h-4" />
          Düzenle
        </button>
      </div>
      <div className="space-y-4 overflow-auto">
        {entries.map(([key, value]) => (
          <div key={key}>
            <p className="font-semibold">{key}:</p>
            <p className="text-gray-700 whitespace-pre-line mb-6">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
