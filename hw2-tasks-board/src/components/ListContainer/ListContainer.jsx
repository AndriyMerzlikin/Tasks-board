/* eslint-disable react/prop-types */
import List from "../List/List";
import {
  STATUS_TODO,
  STATUS_IN_PROGRESS,
  STATUS_DONE,
} from "../../constants/statusConstants";
import { useState } from "react";

const ListContainer = ({ list: initialList = [] }) => {
  const [taskList, setTaskList] = useState(initialList);

  const updateTaskStatus = (id, newStatus) => {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTaskList((prevList) => prevList.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <List
        list={taskList}
        status={STATUS_TODO}
        updateTaskStatus={updateTaskStatus}
      />
      <List
        list={taskList}
        status={STATUS_IN_PROGRESS}
        updateTaskStatus={updateTaskStatus}
      />
      <List
        list={taskList}
        status={STATUS_DONE}
        updateTaskStatus={updateTaskStatus}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default ListContainer;
