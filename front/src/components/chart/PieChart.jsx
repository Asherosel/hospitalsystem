import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieCard = ({ title, labels, data, backgroundColors }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md h-[350px] flex flex-col">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex-grow">
        <Pie
          options={{ maintainAspectRatio: false }}
          data={{
            labels,
            datasets: [
              {
                data,
                backgroundColor: backgroundColors,
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

export default PieCard
