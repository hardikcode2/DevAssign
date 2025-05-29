import React from 'react'

const AcceptTask = ({data ,onComplete, onFail}) => {
  return (
    
    <div className='flex-shrink-0 h-full w-[320px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="flex justify-between mt-6">
  <button
  onClick={onComplete}
  className="bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition duration-200">
    Mark as Completed
  </button>
  <button
  onClick={onFail}
  className="bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
    Mark as Failed
  </button>
</div>

        </div>
  )
}

export default AcceptTask