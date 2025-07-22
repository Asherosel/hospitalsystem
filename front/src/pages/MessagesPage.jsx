import React from 'react'

const MessagesPage = () => {
  const handleAddMessage = () => {
    alert('Mesaj Ekle butonuna tıklandı')
  }

  return (
    <div className="p-6 space-y-6">
      {/* Başlık ve Buton */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-500">Mesaj Bilgileri Düzenleme</h1>
        <button
          onClick={handleAddMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
        >
          Mesaj Ekle
        </button>
      </div>
      <hr className="border-b border-gray-300" />
    </div>
  )
}

export default MessagesPage
