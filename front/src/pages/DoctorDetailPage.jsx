import React, { useState } from 'react'
import DoctorAddForm from '../components/form/DoctorAddForm'
import DoctorList from '../components/list/DoctorList'

const DoctorDetailPage = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Ahmet Yılmaz", image: "/images/doctor1.jpg" },
    { id: 2, name: "Dr. Elif Kaya", image: "/images/doctor2.jpg" },
    { id: 3, name: "Dr. Mehmet Demir", image: "/images/doctor3.jpg" },
    { id: 4, name: "Dr. Ayşe Çelik", image: "/images/doctor4.jpg" },
    { id: 5, name: "Dr. Canan Öztürk", image: "/images/doctor5.jpg" },
    { id: 6, name: "Dr. Emre Şahin", image: "/images/doctor6.jpg" },
  ])

  const [newDoctorName, setNewDoctorName] = useState("")

  const handleAddDoctor = () => {
    if (!newDoctorName.trim()) return
    setDoctors(prev => [
      ...prev,
      { id: prev.length ? prev[prev.length - 1].id + 1 : 1, name: newDoctorName.trim(), image: "/images/default-doctor.jpg" }
    ])
    setNewDoctorName("")
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Doktor Detayı Düzenleme</h1>
      <hr className="border-b border-gray-300" />

      <DoctorAddForm
        newDoctorName={newDoctorName}
        setNewDoctorName={setNewDoctorName}
        onAddDoctor={handleAddDoctor}
      />

      <DoctorList doctors={doctors} />
    </div>
  )
}

export default DoctorDetailPage
