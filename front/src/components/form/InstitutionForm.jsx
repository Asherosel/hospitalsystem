import React, { useState } from 'react'
import Input from '../input/Input'

const InstitutionForm = ({ onAdd }) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    onAdd(input)
    setInput("")
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Yeni Başlık Ekle</h2>
     <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-end gap-4">
  <div className="w-full md:flex-1">
    <Input
      id="institutionTitle"
      label="Kurum Başlığı"
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="Yeni kurum başlığı giriniz..."
      required
    />
  </div>
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded h-[42px]"
  >
    Başlık Ekle
  </button>
</form>
    </div>
  )
}

export default InstitutionForm
