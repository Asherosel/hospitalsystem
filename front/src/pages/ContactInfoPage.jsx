import React, { useState } from 'react'
import PhoneCard from "../components/card/PhoneCard"

const ContactInfoPage = () => {
  const [phoneData, setPhoneData] = useState([
    { id: 1, name: 'Resepsiyon', number: '0212 123 45 67', type: 'Sabit' },
    { id: 2, name: 'Acil Servis', number: '0532 987 65 43', type: 'Mobil' },
  ])

  // Yeni telefon ekleme (örnek statik veri)
  const handleAddClick = () => {
    const newId = phoneData.length ? phoneData[phoneData.length - 1].id + 1 : 1
    const newPhone = {
      id: newId,
      name: 'Yeni Telefon',
      number: '000 000 00 00',
      type: 'Mobil'
    }
    setPhoneData(prev => [...prev, newPhone])
  }

  // Tek telefon silme
  const handleDelete = (id) => {
    setPhoneData(prev => prev.filter(phone => phone.id !== id))
  }

  // Tüm telefonları sil (İstersen PhoneCard içinde veya burada olabilir)
  const handleDeleteAll = () => {
    setPhoneData([])
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">İletişim Bilgileri Düzenle</h1>
      <hr className="border-b border-gray-300" />

      <PhoneCard
        phoneData={phoneData}
        onAddClick={handleAddClick}
        onDelete={handleDelete}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  )
}

export default ContactInfoPage
