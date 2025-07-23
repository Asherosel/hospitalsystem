import React from 'react'
import Input from '../input/Input'

const LocationForm = ({ locationData, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Konum Bilgileri</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
        <Input
          id="country"
          label="Ülke"
          value={locationData.country}
          onChange={e => onChange('country', e.target.value)}
          placeholder="Ülke giriniz"
        />
        <Input
          id="city"
          label="İl"
          value={locationData.city}
          onChange={e => onChange('city', e.target.value)}
          placeholder="İl giriniz"
        />
        <Input
          id="district"
          label="İlçe"
          value={locationData.district}
          onChange={e => onChange('district', e.target.value)}
          placeholder="İlçe giriniz"
        />
        <Input
          id="neighborhood"
          label="Mahalle"
          value={locationData.neighborhood}
          onChange={e => onChange('neighborhood', e.target.value)}
          placeholder="Mahalle giriniz"
        />
      </form>
    </div>
  )
}

export default LocationForm
