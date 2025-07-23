import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import Input from '../input/Input'

const UrlAddForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    onAdd(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white p-6 shadow-md rounded-xl gap-4">
      <Input
        id="url"
        label="Yeni URL"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="https://example.com"
        required
      />
      <button
        type="submit"
        className="h-[42px] mt-6 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <FaPlus className="mr-2" />
        Ekle
      </button>
    </form>
  )
}

export default UrlAddForm
