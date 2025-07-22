import React from 'react'

const AnnouncementCard = ({ title, content }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <h3 className="font-semibold text-lg text-gray-700">{title}</h3>
      <p className="text-gray-600 mt-1">{content}</p>
    </div>
  )
}

export default AnnouncementCard
