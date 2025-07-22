import React from 'react'

const Select = ({ id, label, value, onChange, options }) => (
  <div>
    <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
)

export default Select
