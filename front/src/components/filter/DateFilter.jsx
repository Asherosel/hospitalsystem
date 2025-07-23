import React from 'react'

const DateFilter = ({ startDate, endDate, onStartChange, onEndChange, onFilter }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-evenly gap-4">
      <input
        type="date"
        value={startDate}
        onChange={onStartChange}
        className="border border-gray-300 rounded px-4 py-2"
      />
      <span className="text-gray-500">-</span>
      <input
        type="date"
        value={endDate}
        onChange={onEndChange}
        className="border border-gray-300 rounded px-4 py-2"
      />
      <button
        onClick={onFilter}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Filtrele
      </button>
    </div>
  )
}

export default DateFilter
