import React from 'react'
import { FaTimes } from 'react-icons/fa'

const SliderImageList = ({ sliderImages, onDeleteImage }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Yüklenmiş Slider Resimleri</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sliderImages?.map((img, i) => (
          <div key={i} className="relative group rounded overflow-hidden shadow">
            <img
              src={img}
              alt={`Slider ${i + 1}`}
              className="rounded object-cover w-full h-32"
            />
            <button
              onClick={() => onDeleteImage(i)}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              title="Sil"
            >
              <FaTimes size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderImageList
