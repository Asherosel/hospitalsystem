import React from 'react'
import AdminUserForm from '../components/form/AdminUserForm'

const AddAdminUserPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-500">Kullanıcı Oluştur</h1>
      <hr className="border-b border-gray-300" />
      <AdminUserForm />
    </div>
  )
}

export default AddAdminUserPage
