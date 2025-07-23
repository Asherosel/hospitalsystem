import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Input from '../input/Input'

const DoctorAddForm = ({ newDoctorName, setNewDoctorName, onAddDoctor }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-medium text-gray-700 mb-3">Yeni Doktor Ekle</h2>
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <Input
            id="newDoctorName"
            label="Doktor İsmi"
            value={newDoctorName}
            onChange={e => setNewDoctorName(e.target.value)}
            placeholder="Doktor ismi giriniz..."
          />
        </div>
        <button
          onClick={onAddDoctor}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded h-[42px]"
          aria-label="Yeni doktor ekle"
        >
          <FaPlus />
          Ekle
        </button>
      </div>
    </div>
  )
}

export default DoctorAddForm
