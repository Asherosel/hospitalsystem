import React from 'react'
import UserRow from './UserRow'

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl">
      <table className="w-full table-auto text-sm text-left text-gray-600">
        <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Kimlik Numarası</th>
            <th className="px-4 py-3">Doğum Tarihi</th>
            <th className="px-4 py-3">Telefon</th>
            <th className="px-4 py-3">İsim</th>
            <th className="px-4 py-3">Soyisim</th>
            <th className="px-4 py-3">Kayıt Tarihi</th>
            <th className="px-4 py-3">Kayıt Türü</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center text-gray-400 py-4">
                Henüz kullanıcı bulunmamaktadır.
              </td>
            </tr>
          ) : (
            users.map(user => <UserRow key={user.id} user={user} />)
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
