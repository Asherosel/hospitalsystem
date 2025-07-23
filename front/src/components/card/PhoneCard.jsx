import React from 'react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'

const PhoneCard = ({ phoneData, onAddClick, onDelete, onDeleteAll }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      {/* Başlık + Ekle Butonu */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">Telefon Bilgileri</h2>
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium"
          aria-label="Yeni telefon ekle"
        >
          <FaPlus />
          Ekle
        </button>
      </div>

      {/* Telefon yoksa */}
      {phoneData.length === 0 && (
        <p className="text-gray-500">Henüz telefon bilgisi eklenmemiş.</p>
      )}

      {/* Telefon Listesi */}
      {phoneData.map(({ id, name, number, type }) => (
        <div
          key={id}
          className="flex items-center justify-between border border-gray-200 rounded p-3"
        >
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span>{number}</span>
            <span className="text-sm text-gray-500">{type}</span>
          </div>
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-700"
            aria-label={`Sil ${name}`}
          >
            <FaTrashAlt size={18} />
          </button>
        </div>
      ))}

      {/* Güncelle ve Tümünü Sil Butonları */}
      <div className="flex gap-4 justify-end pt-4 border-t border-gray-200">
        <button
          onClick={() => alert('Güncelleme işlemi burada olacak')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium"
        >
          Güncelle
        </button>
        <button
          onClick={onDeleteAll}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium"
        >
          Tümünü Sil
        </button>
      </div>
    </div>
  )
}

export default PhoneCard
