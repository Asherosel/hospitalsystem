import React from 'react'

const DiscountRow = ({ discount, onEdit, onDelete }) => {
  const { id, type, amount, description, status } = discount

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{type}</td>
      <td className="px-4 py-2">{amount}</td>
      <td className="px-4 py-2">{description}</td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded text-white text-xs ${
            status === "Aktif" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-2 space-x-2">
        <button
          onClick={() => onEdit(id)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
        >
          Sil
        </button>
      </td>
    </tr>
  )
}

export default DiscountRow
