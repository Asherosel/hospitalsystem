import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

const LineChart = ({ title, labels, data, bgColor, label }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-xl">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">{title}</h3>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label,
              data,
              backgroundColor: bgColor,
            },
          ],
        }}
      />
    </div>
  )
}

export default LineChart
