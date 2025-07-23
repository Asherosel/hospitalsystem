import React from 'react'

const NotificationRow = ({ notification }) => {
  const { id, title, content, date, status } = notification

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2">
        <input type="checkbox" />
      </td>
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{title}</td>
      <td className="px-4 py-2">{content}</td>
      <td className="px-4 py-2">{date}</td>
      <td className="px-4 py-2">
        <span className="px-2 py-1 rounded text-white text-xs bg-green-500">
          {status}
        </span>
      </td>
    </tr>
  )
}

export default NotificationRow
