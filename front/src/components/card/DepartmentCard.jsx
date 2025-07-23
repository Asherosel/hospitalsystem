import React from 'react'

const DepartmentCard = ({ department, onEdit }) => {
  const { name, image } = department

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h3 className="text-center font-medium text-gray-800 mb-2">{name}</h3>
      <button
        onClick={onEdit}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
      >
        Detayı Düzenle
      </button>
    </div>
  )
}

export default DepartmentCard
