import React, { useState } from 'react'
import InstitutionForm from '../components/form/InstitutionForm'
import InstitutionList from '../components/list/InstitutionList'

const InstitutionsPage = () => {
  const [titles, setTitles] = useState([
    "Acıbadem Hastanesi",
    "Medipol Üniversitesi",
    "Florence Nightingale",
  ])

  const addTitle = (title) => {
    const trimmed = title.trim()
    if (!trimmed) return
    setTitles(prev => [...prev, trimmed])
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Anlaşmalı Kurum Düzenleme</h1>
      <hr className="border-b border-gray-300" />

      <InstitutionForm onAdd={addTitle} />

      <InstitutionList titles={titles} />
    </div>
  )
}

export default InstitutionsPage
