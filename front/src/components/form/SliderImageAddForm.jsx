import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const SliderImageAddForm = ({ onImageAdd }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  const handleAddClick = () => {
    if (selectedImage) {
      onImageAdd(selectedImage)
    } else {
      console.log("Lütfen önce bir resim seçin.")
    }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Yeni Slider Resmi Ekle</h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full md:w-auto text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
        />

        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          <FaPlus />
          Ekle
        </button>
      </div>
    </div>
  )
}

export default SliderImageAddForm
