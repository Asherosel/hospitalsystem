import React from 'react'

const InstitutionList = ({ titles }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Başlık Listesi</h2>
      <ul className="space-y-2 list-disc list-inside">
        {titles.length === 0 ? (
          <li className="text-gray-500">Henüz başlık yok.</li>
        ) : (
          titles.map((title, index) => (
            <li key={index} className="text-gray-800">{title}</li>
          ))
        )}
      </ul>
    </div>
  )
}

export default InstitutionList
