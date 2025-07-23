import React, { useState } from 'react'
import DepartmentList from '../components/list/DepartmentList'

const DepartmentDetailsPage = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Kardiyoloji", image: "/images/bolum1.jpg" },
    { id: 2, name: "Nöroloji", image: "/images/bolum2.jpg" },
    { id: 3, name: "Ortopedi", image: "/images/bolum3.jpg" },
    { id: 4, name: "Dermatoloji", image: "/images/bolum4.jpg" },
    { id: 5, name: "Göz Hastalıkları", image: "/images/bolum5.jpg" },
    { id: 6, name: "Dahiliye", image: "/images/bolum6.jpg" },
    { id: 7, name: "Pediatri", image: "/images/bolum7.jpg" },
    { id: 8, name: "Psikiyatri", image: "/images/bolum8.jpg" },
  ])

  const handleEdit = (id) => {
    alert(`Detayı düzenle tıklandı - ID: ${id}`)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Bölüm Detayları Düzenleme</h1>
      <hr className="border-b border-gray-300" />

      <DepartmentList departments={departments} onEdit={handleEdit} />
    </div>
  )
}

export default DepartmentDetailsPage
