/* eslint-disable react/prop-types */
import List from "../List/List";
import {
  STATUS_TODO,
  STATUS_IN_PROGRESS,
  STATUS_DONE,
} from "../../constants/statusConstants";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./ListContainer.styled";

const ListContainer = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks"
        );
        setTaskList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

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
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTaskList((prevState) => prevState.filter((task) => task.id !== id));
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