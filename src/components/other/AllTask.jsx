import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-gray-800/50 border border-emerald-500/20 mt-5 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
        All Employees Task Overview
      </h2>
      <div className="overflow-x-auto">
        <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 mb-3 py-3.5 px-6 flex justify-between rounded-xl backdrop-blur-sm">
          <h2 className="text-base font-semibold w-1/5 text-emerald-300">Employee Name</h2>
          <h3 className="text-base font-semibold w-1/5 text-blue-300">New Task</h3>
          <h5 className="text-base font-semibold w-1/5 text-yellow-300">Active Task</h5>
          <h5 className="text-base font-semibold w-1/5 text-emerald-300">Completed</h5>
          <h5 className="text-base font-semibold w-1/5 text-red-300">Failed</h5>
        </div>
        <div className="space-y-2">
          {userData.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-gray-900/30 border border-gray-700/50 mb-2 py-4 px-6 flex justify-between rounded-xl hover:bg-gray-900/50 hover:border-emerald-500/30 transition-all duration-300"
              >
                <h2 className="text-base font-medium w-1/5 text-white">{elem.firstName}</h2>
                <h3 className="text-base font-semibold w-1/5 text-blue-400">
                  {elem.taskCount.newTask}
                </h3>
                <h5 className="text-base font-semibold w-1/5 text-yellow-400">
                  {elem.taskCount.active}
                </h5>
                <h5 className="text-base font-semibold w-1/5 text-emerald-400">
                  {elem.taskCount.completed}
                </h5>
                <h5 className="text-base font-semibold w-1/5 text-red-400">
                  {elem.taskCount.failed}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
