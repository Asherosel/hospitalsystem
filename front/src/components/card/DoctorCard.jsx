import React from 'react'

const DoctorCard = ({ doctor }) => {
  return (
    <div className="flex flex-col items-center border border-gray-200 rounded-lg p-4">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-20 h-20 rounded-full object-cover mb-3"
      />
      <h3 className="text-center font-medium text-gray-800 mb-2">{doctor.name}</h3>
      <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
        Detayı Güncelle
      </button>
    </div>
  )
}

export default DoctorCard
