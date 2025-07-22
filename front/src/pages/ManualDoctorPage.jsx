import React, { useState } from 'react'
import InputCard from '../components/card/InputCard' // Yolunu projenize göre güncelle

const ManualDoctorPage = () => {
  const [doctorName, setDoctorName] = useState("")

  const handleAddDoctor = () => {
    if (!doctorName.trim()) return
    alert(`Yeni doktor eklendi: ${doctorName}`)
    setDoctorName("")
  }

  return (
    <div className="p-6 space-y-6 ">
      {/* Başlık */}
      <h1 className="text-2xl font-semibold text-blue-500">Manuel Doktor Düzenleme</h1>
      <hr className="border-b border-gray-300" />

      {/* Ekle Butonu */}
      <div className="flex justify-end">
        <button
          onClick={handleAddDoctor}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded"
        >
          Doktor Ekle
        </button>
      </div>
    </div>
  )
}

export default ManualDoctorPage
