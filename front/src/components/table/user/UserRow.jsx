import React from 'react'

const UserRow = ({ user }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2">{user.id}</td>
      <td className="px-4 py-2">{user.identity}</td>
      <td className="px-4 py-2">{user.birthDate}</td>
      <td className="px-4 py-2">{user.phone}</td>
      <td className="px-4 py-2">{user.firstName}</td>
      <td className="px-4 py-2">{user.lastName}</td>
      <td className="px-4 py-2">{user.registerDate}</td>
      <td className="px-4 py-2">{user.registerType}</td>
    </tr>
  )
}

export default UserRow
