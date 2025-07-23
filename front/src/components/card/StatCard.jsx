import React from 'react'

const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h2 className="text-lg font-medium text-gray-700">{title}</h2>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  )
}

export default StatCard
