import React from 'react'
import DepartmentCard from '../card/DepartmentCard'

const DepartmentList = ({ departments, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {departments.map(dept => (
        <DepartmentCard 
          key={dept.id} 
          department={dept} 
          onEdit={() => onEdit(dept.id)} 
        />
      ))}
    </div>
  )
}

export default DepartmentList
