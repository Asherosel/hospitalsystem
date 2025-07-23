import React from 'react'
import DoctorCard from '../card/DoctorCard'

const DoctorList = ({ doctors }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

export default DoctorList
