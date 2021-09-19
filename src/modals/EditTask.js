// import { NONAME } from "dns";
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target; //one line code written using destructuring for above operation

    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTitle(taskObj.Title);
    setDescription(taskObj.Description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = () => {
    // e.preventDefault();
    let tempObj = {};
    tempObj["Title"] = title;
    tempObj["Description"] = description;
    updateTask(tempObj);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form action="">
          <div className="form-group">
            <label htmlFor="title">Task Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="plaease fill in the brief description about the task you need to do...."
              name="description"
              id=""
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
