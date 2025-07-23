import React from 'react'

const MapCard = () => {
  return (
   <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Harita</h2>
        <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
          Harita alanı (buraya harita bileşeni entegre edilecek)
        </div>
         <div className=" p-6 rounded-xl flex gap-4 justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium"
        >
          Güncelle
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-medium"
        >
          Konum Ara
        </button>
      </div>
      </div>
  )
}

export default MapCard
