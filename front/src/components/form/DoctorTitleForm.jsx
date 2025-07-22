import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Input from '../input/Input'

const DoctorTitleForm = ({ newTitle, setNewTitle, onAddTitle }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Yeni Başlık Ekle</h2>

    <div className="flex flex-col md:flex-row items-end gap-4">
  <div className="w-full md:flex-1">
    <label htmlFor="doctorTitle" className="block mb-1 font-medium text-gray-700">
      Başlık
    </label>
    <input
      id="doctorTitle"
      type="text"
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      placeholder="Başlık giriniz..."
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    onClick={onAddTitle}
    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded h-[42px]"
    aria-label="Başlık ekle"
  >
    <FaPlus />
    Ekle
  </button>
</div>

    </div>
  )
}

export default DoctorTitleForm
