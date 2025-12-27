import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Helper function to recalculate task counts based on actual tasks
  const recalculateTaskCounts = (user) => {
    const counts = {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0
    };

    user.tasks.forEach((task) => {
      if (task.newTask) counts.newTask++;
      if (task.active) counts.active++;
      if (task.completed) counts.completed++;
      if (task.failed) counts.failed++;
    });

    user.taskCount = counts;
  };

  // Added this function to update task status to completed or failed
  // created this for mark our task with button complete or failed
  const updateTaskStatus = (taskIndex, status) => {
    const updatedUserData = [...userData];
    const currentUser = updatedUserData.find(
      (user) => user.firstName === data.firstName
    );

    if (currentUser) {
      const task = currentUser.tasks[taskIndex];
      task.active = false; // Task is no longer active after status update
      task.newTask = false; // Task is no longer new

      if (status === "completed") {
        task.completed = true;
        task.failed = false;
      } else if (status === "failed") {
        task.failed = true;
        task.completed = false;
      }

      // Recalculate task counts after status update
      recalculateTaskCounts(currentUser);

      setUserData(updatedUserData);
    }
  };

  const handleAccept = (index) => {
    const updatedUserData = [...userData];
    const currentUser = updatedUserData.find(
      (user) => user.firstName === data.firstName
    );

    if (currentUser) {
      const task = currentUser.tasks[index];
      task.newTask = false;
      task.active = true;

      // Recalculate task counts after accepting task
      recalculateTaskCounts(currentUser);

      setUserData(updatedUserData);
    }
  };

  // Sort tasks to show new tasks first, then active, then completed, then failed
  const sortedTasks = [...data.tasks].sort((a, b) => {
    // Priority: newTask > active > completed > failed
    if (a.newTask && !b.newTask) return -1;
    if (!a.newTask && b.newTask) return 1;
    if (a.active && !b.active) return -1;
    if (!a.active && b.active) return 1;
    if (a.completed && !b.completed) return -1;
    if (!a.completed && b.completed) return 1;
    return 0;
  });

  // Helper to find original index in the tasks array
  const findOriginalIndex = (task) => {
    return data.tasks.findIndex(
      (t) => 
        t.taskTitle === task.taskTitle &&
        t.taskDate === task.taskDate &&
        t.taskDescription === task.taskDescription
    );
  };

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full py-6 mt-10"
    >
      {sortedTasks.map((elem, sortedIdx) => {
        const originalIdx = findOriginalIndex(elem);
        
        if (elem.active) {
          return (
            <AcceptTask
              key={`active-${originalIdx}-${elem.taskTitle}`}
              data={elem}
              onComplete={() => updateTaskStatus(originalIdx, "completed")}
              onFail={() => updateTaskStatus(originalIdx, "failed")}
            />
          );
        }
        if (elem.newTask) {
          return (
            <NewTask 
              key={`new-${originalIdx}-${elem.taskTitle}`} 
              data={elem} 
              onAccept={() => handleAccept(originalIdx)} 
            />
          );
        }
        if (elem.completed) {
          return (
            <CompleteTask 
              key={`completed-${originalIdx}-${elem.taskTitle}`} 
              data={elem} 
            />
          );
        }
        if (elem.failed) {
          return (
            <FailedTask 
              key={`failed-${originalIdx}-${elem.taskTitle}`} 
              data={elem} 
            />
          );
        }
        return null; // Added to prevent react warning if no condition matches
      })}
    </div>
  );
};

export default TaskList;
