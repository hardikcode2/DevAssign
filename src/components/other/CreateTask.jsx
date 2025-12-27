import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  

 const submitHandler = (e) => {
  e.preventDefault();

  const task = {
  taskTitle,
  taskDescription,
  taskDate,
  category,
  active: false,
  newTask: true,
  failed: false,
  completed: false,
};


  const data = [...userData];
  data.forEach(function (elem) {
    if (asignTo === elem.firstName) {
      elem.tasks.push(task);
      elem.taskCount.newTask = elem.taskCount.newTask + 1;
    }
  });

  setUserData(data);

  setAsignTo("");
  setCategory("");
  setTaskDate("");
  setTaskDescription("");
  setTaskTitle("");
};


  return (
    <div className="p-8 bg-gray-800/50 border border-emerald-500/20 mt-7 rounded-2xl backdrop-blur-sm shadow-xl">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
        Create New Task
      </h2>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        <div className="flex-1 min-w-[300px] space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-gray-900/50 border border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-gray-900/50 border border-emerald-500/30 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Assign to</label>
            <select
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-gray-900/50 border border-emerald-500/30 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
            >
              <option value="" className="bg-gray-900 text-gray-300">Select employee</option>
              {userData && userData.map((employee, idx) => (
                <option key={idx} value={employee.firstName} className="bg-gray-900 text-gray-300">
                  {employee.firstName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-gray-900/50 border border-emerald-500/30 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
            >
              <option value="" className="bg-gray-900 text-gray-300">Select category</option>
              <option value="Dev" className="bg-gray-900 text-gray-300">Dev</option>
              <option value="Design" className="bg-gray-900 text-gray-300">Design</option>
              <option value="Frontend" className="bg-gray-900 text-gray-300">Frontend</option>
              <option value="Backend" className="bg-gray-900 text-gray-300">Backend</option>
              <option value="Testing" className="bg-gray-900 text-gray-300">Testing</option>
              <option value="Documentation" className="bg-gray-900 text-gray-300">Documentation</option>
              <option value="DevOps" className="bg-gray-900 text-gray-300">DevOps</option>
              <option value="Maintenance" className="bg-gray-900 text-gray-300">Maintenance</option>
              <option value="Research" className="bg-gray-900 text-gray-300">Research</option>
              <option value="Content" className="bg-gray-900 text-gray-300">Content</option>
              <option value="Other" className="bg-gray-900 text-gray-300">Other</option>
            </select>
          </div>
        </div>
        <div className="flex-1 min-w-[300px] flex flex-col">
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-3 px-4 rounded-xl outline-none bg-gray-900/50 border border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
            placeholder="Enter task description..."
          ></textarea>
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-3.5 hover:from-emerald-500 hover:to-emerald-400 px-5 rounded-xl text-sm font-medium mt-6 w-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
