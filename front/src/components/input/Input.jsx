import React from 'react'

const Input = ({ id, label, value, onChange, type = 'text', required = false, placeholder }) => (
  <div className='flex-1'>
    <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
)

export default Input
