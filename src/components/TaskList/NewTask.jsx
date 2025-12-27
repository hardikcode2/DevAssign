import React from "react";

const NewTask = ({ data, onAccept  }) => {
  return (
    <div className="flex-shrink-0 h-full w-[340px] p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl backdrop-blur-sm shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-emerald-500/30 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-500/50">
          {data.category}
        </span>
        <span className="text-xs text-gray-400 font-medium">{new Date(data.taskDate).toLocaleDateString()}</span>
      </div>
      <h2 className="text-xl font-bold mb-3 text-white leading-tight">{data.taskTitle}</h2>
      <p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3">{data.taskDescription}</p>
      <div className="mt-auto">
        <button 
        onClick={onAccept} 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium px-4 py-3 rounded-xl hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
