import React, { useState } from 'react'
import DiscountTable from '../components/table/discount/DiscountTable'

const DiscountPage = () => {
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      type: "Yüzde",
      amount: "%10",
      description: "İlk üyelikte geçerli",
      status: "Aktif"
    },
    {
      id: 2,
      type: "Sabit",
      amount: "100₺",
      description: "Black Friday indirimi",
      status: "Pasif"
    },
  ])

  const handleCreate = () => {
    alert("Yeni indirim oluşturulacak")
  }

  const handleEdit = (id) => {
    alert(`ID: ${id} düzenlenecek`)
  }

  const handleDelete = (id) => {
    alert(`ID: ${id} silinecek`)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">İndirim Tanımlama</h1>
      <hr className="border-b border-gray-300" />

      <div className="flex justify-end items-center">
        <button
          onClick={handleCreate}
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded"
        >
          İndirim Oluştur
        </button>
      </div>

      <DiscountTable
        discounts={discounts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default DiscountPage
