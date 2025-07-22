import React, { useState } from 'react'
import UserTable from '../components/table/user/UserTable'

const MobilUsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      identity: '12345678901',
      birthDate: '1990-05-15',
      phone: '0555 123 45 67',
      firstName: 'Ali',
      lastName: 'Yılmaz',
      registerDate: '2025-06-01',
      registerType: 'Mobil',
    },
    {
      id: 2,
      identity: '10987654321',
      birthDate: '1985-09-22',
      phone: '0532 987 65 43',
      firstName: 'Ayşe',
      lastName: 'Kara',
      registerDate: '2025-06-10',
      registerType: 'Web',
    },
  ])

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Mobil Uygulama Kullanıcıları</h1>
      <hr className="border-b border-gray-300" />
      <UserTable users={users} />
    </div>
  )
}

export default MobilUsersPage
