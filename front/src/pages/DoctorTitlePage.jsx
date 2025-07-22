import React, { useState } from 'react'
import DoctorTitleForm from '../components/form/DoctorTitleForm'
import DoctorTitleList from '../components/list/DoctorTitleList'

const DoctorTitlePage = () => {
  const [titles, setTitles] = useState([])
  const [newTitle, setNewTitle] = useState("")

  const handleAddTitle = () => {
    if (!newTitle.trim()) return
    setTitles(prev => [...prev, newTitle.trim()])
    setNewTitle("")
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Doktor Detay Başlığı Düzenleme</h1>
      <hr className="border-b border-gray-300" />

      <DoctorTitleForm
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        onAddTitle={handleAddTitle}
      />

      <DoctorTitleList titles={titles} />
    </div>
  )
}

export default DoctorTitlePage
