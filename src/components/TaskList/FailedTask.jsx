import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[340px] p-6 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl backdrop-blur-sm shadow-xl shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-red-500/30 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-500/50">
          {data.category}
        </span>
        <span className="text-xs text-gray-400 font-medium">{new Date(data.taskDate).toLocaleDateString()}</span>
      </div>
      <h2 className="text-xl font-bold mb-3 text-white leading-tight">{data.taskTitle}</h2>
      <p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3 flex-grow">{data.taskDescription}</p>

      <div className="mt-auto">
        <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-medium py-3 rounded-xl shadow-lg shadow-red-500/30 flex items-center justify-center gap-2">
          <span>✕</span>
          <span>Failed</span>
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
