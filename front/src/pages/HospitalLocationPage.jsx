import React, { useState } from 'react'
import LocationForm from '../components/form/LocationForm'
import MapCard from '../components/card/MapCard'

const HospitalLocationPage = () => {
  const [locationData, setLocationData] = useState({
    country: '',
    city: '',
    district: '',
    neighborhood: ''
  })

  // Tek bir handler ile güncelleme yapabiliriz
  const handleChange = (field, value) => {
    setLocationData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">
        Hastane Konumu Düzenleme
      </h1>
      <hr className="border-b border-gray-300" />

      <LocationForm locationData={locationData} onChange={handleChange} />
      <MapCard locationData={locationData} />
    </div>
  )
}

export default HospitalLocationPage
