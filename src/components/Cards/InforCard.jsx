import React from 'react'

function InfoCard({ title, value, children: icon }) {
  return (
    <div>
      <div className="flex items-center">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
