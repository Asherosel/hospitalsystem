import React from 'react'
import AnnouncementCard from '../card/AnnouncementCard'

const AnnouncementList = ({ notifications }) => {
  if (notifications.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4">
        <p className="text-gray-500 text-center">Henüz duyuru yok.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
      {notifications.map(({ id, title, content }) => (
        <AnnouncementCard key={id} title={title} content={content} />
      ))}
    </div>
  )
}

export default AnnouncementList
