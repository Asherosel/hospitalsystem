import React from 'react'
import NotificationRow from './NotificationRow'

const NotificationTable = ({ notifications }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl">
      <table className="w-full table-auto text-sm text-left text-gray-600">
        <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
          <tr>
            <th className="px-4 py-3">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Başlık</th>
            <th className="px-4 py-3">İçerik</th>
            <th className="px-4 py-3">Eklenme Zamanı</th>
            <th className="px-4 py-3">Durum</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-gray-400 py-4">
                Henüz bildirim gönderilmemiş.
              </td>
            </tr>
          ) : (
            notifications.map((notification) => (
              <NotificationRow key={notification.id} notification={notification} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default NotificationTable
