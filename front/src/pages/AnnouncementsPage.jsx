import React, { useState } from 'react'
import AnnouncementList from '../components/list/AnnouncementList'

const AnnouncementsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Site Bakımı", content: "Pazar günü 02:00-04:00 arası bakım yapılacaktır." },
    { id: 2, title: "Yeni Özellik", content: "Mobil uygulamaya yeni özellik eklendi." },
  ])

  const handleAddNotification = () => {
    alert('Yeni duyuru ekleme işlemi yapılacak')
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-500">Duyuru Bilgileri Düzenle</h1>
        <button
          onClick={handleAddNotification}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
        >
          Yeni Duyuru Ekle
        </button>
      </div>
      <hr className="border-b border-gray-300" />
      <AnnouncementList notifications={notifications} />
    </div>
  )
}

export default AnnouncementsPage
