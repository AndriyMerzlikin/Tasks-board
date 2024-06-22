/* eslint-disable react/prop-types */
import List from "../List/List";
import {
  STATUS_TODO,
  STATUS_IN_PROGRESS,
  STATUS_DONE,
} from "../../constants/statusConstants";
import { useState } from "react";
import { Container } from "./ListContainer.styled";

const ListContainer = ({ list: initialList = [] }) => {
  const [taskList, setTaskList] = useState(initialList);

  const todoList = taskList.filter(
    (item) => item.status === STATUS_TODO.status
  );
  const inProgressList = taskList.filter(
    (item) => item.status === STATUS_IN_PROGRESS.status
  );
  const doneList = taskList.filter(
    (item) => item.status === STATUS_DONE.status
  );

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
    <Container>
      <List
        list={todoList}
        status={STATUS_TODO}
        updateTaskStatus={updateTaskStatus}
      />
      <List
        list={inProgressList}
        status={STATUS_IN_PROGRESS}
        updateTaskStatus={updateTaskStatus}
      />
      <List
        list={doneList}
        status={STATUS_DONE}
        updateTaskStatus={updateTaskStatus}
        handleDeleteTask={handleDeleteTask}
      />
    </Container>
  );
};

export default ListContainer;
