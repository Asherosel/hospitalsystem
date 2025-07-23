import React from 'react'
import DiscountRow from './DiscountRow'

const DiscountTable = ({ discounts, onEdit, onDelete }) => {
  if (discounts.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 text-center text-gray-400">
        Henüz bir indirim eklenmemiş.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl">
      <table className="w-full table-auto text-sm text-left text-gray-600">
        <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">İndirim Türü</th>
            <th className="px-4 py-3">Miktar</th>
            <th className="px-4 py-3">Açıklama</th>
            <th className="px-4 py-3">Durum</th>
            <th className="px-4 py-3">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map(discount => (
            <DiscountRow
              key={discount.id}
              discount={discount}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DiscountTable
