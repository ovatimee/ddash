import React from 'react'

function InfoCard({ title, value, children: icon }) {
  return (
    <div className='border py-2 px-4 rounded-lg h-24'>
      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
      <div className="flex items-center">
        {icon}
        <div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
