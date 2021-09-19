import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const refresh = () => {
    let arr = localStorage.getItem("taskList");//get tasklist items from localstorage
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    };
  }

  // fetch the task list items from local storage whenever the state is updated
  useEffect(() => {
    refresh();
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    refresh();
    // window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList =taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    refresh();
    // setModal(false);
  }

  return (
    <>
      <div className="header  text-center">
        <h1>Todo List</h1>
        <button className="btn btn-primary mt-2" onClick={() => {
          setModal(true);

        }}>
          Create Task
        </button>
      </div>

      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
          ))}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask}  />
    </>
  );
};

export default TodoList;
