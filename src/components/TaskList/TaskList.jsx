import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

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
    }

    setUserData(updatedUserData);
  };

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-7 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              onComplete={() => updateTaskStatus(idx, "completed")}
              onFail={() => updateTaskStatus(idx, "failed")}
            />
          );
        }
        if (elem.newTask) {
          return (
            <NewTask key={idx} data={elem} onAccept={() => handleAccept(idx)} />
          );
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null; // Added to prevent react warning if no condition matches
      })}
    </div>
  );
};

export default TaskList;
