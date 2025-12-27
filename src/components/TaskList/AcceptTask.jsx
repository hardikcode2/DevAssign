import React from 'react'

const AcceptTask = ({data ,onComplete, onFail}) => {
  return (
    <div className='flex-shrink-0 h-full w-[340px] p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl backdrop-blur-sm shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 flex flex-col'>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-orange-500/30 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-orange-500/50'>{data.category}</span>
                <span className='text-xs text-gray-400 font-medium'>{new Date(data.taskDate).toLocaleDateString()}</span>
            </div>
            <h2 className='text-xl font-bold mb-3 text-white leading-tight'>{data.taskTitle}</h2>
            <p className='text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3 flex-grow'>{data.taskDescription}</p>
            <div className="flex gap-3 mt-auto">
              <button
              onClick={onComplete}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-medium px-4 py-3 rounded-xl hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                Complete
              </button>
              <button
              onClick={onFail}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-medium px-4 py-3 rounded-xl hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                Failed
              </button>
            </div>
        </div>
  )
}

export default AcceptTask