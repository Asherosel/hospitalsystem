import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const BranchCard = ({ branch, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition-all duration-300">
      <div
        onClick={() => onToggle(branch.name)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h2 className="text-lg font-semibold text-gray-800">{branch.name}</h2>
        <div className="text-gray-500">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {isOpen && (
        <ul className="mt-3 ml-4 list-disc text-gray-700">
          {branch.departments.map((dept, index) => (
            <li key={index}>{dept}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BranchCard
