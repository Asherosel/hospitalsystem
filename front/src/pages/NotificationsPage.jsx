import React, { useState } from 'react'
import NotificationTable from '../components/table/notification/NotificationTable'
import NotificationForm from '../components/form/NotificationForm'

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Bakım Duyurusu',
      content: 'Sistem bu gece 03:00’te güncellenecektir.',
      date: '2025-06-13 10:30',
      status: 'Gönderildi',
    },
    {
      id: 2,
      title: 'Yeni Özellik',
      content: 'Yeni mesaj sistemi aktif edildi.',
      date: '2025-06-12 14:00',
      status: 'Gönderildi',
    },
  ])

  const handleSend = () => {
    alert('Bildirim gönderilecek!')
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Bildirim Gönderme</h1>
      <hr className="border-b border-gray-300" />

      <NotificationForm onSend={handleSend} />
      <NotificationTable notifications={notifications} />
    </div>
  )
}

export default NotificationPage
