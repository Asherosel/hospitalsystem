import React from 'react'

const DoctorTitleList = ({ titles }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Başlıklar</h2>
      {titles.length === 0 ? (
        <p className="text-gray-500">Henüz başlık eklenmedi.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {titles.map((title, i) => (
            <li key={i} className="text-gray-800">{title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DoctorTitleList
