import React, { useState } from 'react'
import BranchCard from '../components/card/BranchCard'

const BranchesPage = () => {
  const [expandedBranch, setExpandedBranch] = useState(null)

  const branches = [
    {
      name: 'Cildiye',
      departments: ['Cildiye Polikliniği 104', 'Cildiye Polikliniği 105'],
    },
    {
      name: 'Kardiyoloji',
      departments: ['Kardiyoloji Polikliniği 201', 'Kardiyoloji Polikliniği 202'],
    },
    {
      name: 'Nöroloji',
      departments: ['Nöroloji Polikliniği 301'],
    },
  ]

  const toggleBranch = (branchName) => {
    setExpandedBranch(prev => (prev === branchName ? null : branchName))
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-500">Branşlar ve Departmanlar</h1>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
          Branş ve Departman Güncelle
        </button>
      </div>

      <hr className="border-b border-gray-300" />

      <div className="space-y-4">
        {branches.map(branch => (
          <BranchCard
            key={branch.name}
            branch={branch}
            isOpen={expandedBranch === branch.name}
            onToggle={toggleBranch}
          />
        ))}
      </div>
    </div>
  )
}

export default BranchesPage
