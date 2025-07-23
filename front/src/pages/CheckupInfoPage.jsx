import React, { useState } from 'react'
import CheckupCard from '../components/card/CheckupCard'

const CheckupInfoPage = () => {
  const [checkups, setCheckups] = useState([
    { id: 1, image: '/images/checkup1.jpg', language: 'tr' },
    { id: 2, image: '/images/checkup2.jpg', language: 'en' },
    { id: 3, image: '/images/checkup3.jpg', language: 'de' },
    { id: 4, image: '/images/checkup4.jpg', language: 'fr' },
  ])

  const handleImageChange = (file, id) => {
    alert(`Resim güncellenecek - ID: ${id}`)
    // Burada file işlemi yapılabilir
  }

  const handleLanguageChange = (newLang, id) => {
    setCheckups(prev =>
      prev.map(item => item.id === id ? { ...item, language: newLang } : item)
    )
  }

  const handleDelete = (id) => {
    setCheckups(prev => prev.filter(item => item.id !== id))
  }

  const handleUpdate = (id) => {
    alert(`Check-up bilgisi güncellenecek - ID: ${id}`)
  }

  const handleDetails = (id) => {
    alert(`Detaylara gidilecek - ID: ${id}`)
  }

  const handleAddCheckup = () => {
    alert("Yeni check-up eklenecek.")
  }

  const handleContactInfo = () => {
    alert("İletişim bilgisi sayfasına yönlendirilecek.")
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Check-up Bilgileri Düzenleme</h1>
      <hr className="border-b border-gray-300" />

      <div className="flex flex-col justify-end sm:flex-row gap-4">
        <button
          onClick={handleAddCheckup}
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded shadow"
        >
          Check-up Ekle
        </button>
        <button
          onClick={handleContactInfo}
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-4 py-2 rounded shadow"
        >
          İletişim Bilgisi
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {checkups.map(({ id, image, language }) => (
          <CheckupCard
            key={id}
            id={id}
            image={image}
            language={language}
            onImageChange={handleImageChange}
            onLanguageChange={handleLanguageChange}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onDetails={handleDetails}
          />
        ))}
      </div>
    </div>
  )
}

export default CheckupInfoPage
