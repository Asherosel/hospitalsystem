import React from 'react';
import { FaEdit } from 'react-icons/fa'; // Kalem ikonu

const ImageCard = ({ title, img, onEdit }) => {
  const isMultiple = Array.isArray(img);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl text-blue-500 font-semibold">{title}</h2>
        <button
          onClick={onEdit}
          className="flex items-center border-2 bg-white border-blue-600 rounded-xl p-1 gap-1 text-sm text-blue-600 hover:text-white cursor-pointer hover:bg-blue-600 font-medium"
        >
          <FaEdit className="w-4 h-4" />
          Düzenle
        </button>
      </div>

      {isMultiple ? (
        <div className="grid grid-cols-2 gap-4 overflow-auto flex-grow">
          {img.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${title} - ${idx + 1}`}
              className="w-full h-40 object-cover rounded"
            />
          ))}
        </div>
      ) : (
        <img
          src={img}
          alt={title}
          className="w-full h-[400px] object-cover rounded flex-grow"
        />
      )}
    </div>
  );
};

export default ImageCard;
