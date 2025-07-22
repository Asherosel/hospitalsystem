import React, { useState } from 'react'

import Select from '../select/Select'
import Input from '../input/Input'

const AdminUserForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  const [hospitalName, setHospitalName] = useState('')
  const [appName, setAppName] = useState('')
  const [userRole, setUserRole] = useState('admin')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = { username, password, phone, ipAddress, hospitalName, appName, userRole }
    console.log('Form verisi:', formData)
    alert('Kullanıcı kaydedildi!')
    setUsername('')
    setPassword('')
    setPhone('')
    setIpAddress('')
    setHospitalName('')
    setAppName('')
    setUserRole('admin')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg shadow-md">
      <Input
        id="username"
        label="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        placeholder="Kullanıcı adını girin"
      />
      <Input
        id="password"
        label="Parola"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Parolayı girin"
      />
      <Input
        id="phone"
        label="Telefon Numarası"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="Telefon numarasını girin"
      />
      <Input
        id="ipAddress"
        label="IP Adresi"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        placeholder="IP adresini girin"
      />
      <Input
        id="hospitalName"
        label="Hastane Adı"
        value={hospitalName}
        onChange={(e) => setHospitalName(e.target.value)}
        placeholder="Hastane adını girin"
      />
      <Input
        id="appName"
        label="Uygulama Adı"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
        placeholder="Uygulama adını girin"
      />
      <Select
        id="userRole"
        label="Kullanıcı Rolü"
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
        options={[
          { value: 'admin', label: 'Admin' },
          { value: 'editor', label: 'Editor' },
          { value: 'viewer', label: 'Viewer' },
        ]}
      />
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
        >
          Kaydet
        </button>
      </div>
    </form>
  )
}

export default AdminUserForm
