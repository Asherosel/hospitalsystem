import React from 'react'

const CheckupCard = ({
  id,
  image,
  language,
  onImageChange,
  onLanguageChange,
  onDelete,
  onUpdate,
  onDetails
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
      <img src={image} alt="Checkup" className="w-full h-32 object-cover rounded-md" />

      <input
        type="file"
        onChange={(e) => onImageChange(e.target.files[0], id)}
        className="block w-full text-sm text-gray-500
          file:mr-3 file:py-2 file:px-4
          file:rounded file:border-0
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />

      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value, id)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </select>

      <div className="flex justify-between pt-2">
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
        >
          Sil
        </button>
        <button
          onClick={() => onUpdate(id)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
        >
          Güncelle
        </button>
        <button
          onClick={() => onDetails(id)}
          className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-3 py-1 rounded"
        >
          Detaylar
        </button>
      </div>
    </div>
  )
}

export default CheckupCard
