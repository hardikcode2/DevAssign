import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
        <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-between mb-2'>
                <div className='w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center'>
                    <span className='text-2xl'>📋</span>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-1'>{data.taskCount.newTask}</h2>
            <h3 className='text-base font-medium text-gray-300'>New Task</h3>
        </div>
        <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 backdrop-blur-sm shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-between mb-2'>
                <div className='w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center'>
                    <span className='text-2xl'>✅</span>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-1'>{data.taskCount.completed}</h2>
            <h3 className='text-base font-medium text-gray-300'>Completed Task</h3>
        </div>
        <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 backdrop-blur-sm shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-between mb-2'>
                <div className='w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center'>
                    <span className='text-2xl'>⚡</span>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-1'>{data.taskCount.active}</h2>
            <h3 className='text-base font-medium text-gray-300'>Active Task</h3>
        </div>
        <div className='rounded-2xl py-8 px-6 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 backdrop-blur-sm shadow-lg shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-between mb-2'>
                <div className='w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center'>
                    <span className='text-2xl'>❌</span>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-1'>{data.taskCount.failed}</h2>
            <h3 className='text-base font-medium text-gray-300'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers