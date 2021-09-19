// import { NONAME } from "dns";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleChange = (e) => {
    // const title = e.target.title;  
    // const value =e.target.value;
    

    const {name, value } = e.target; //one line code written using destructuring for above operation 

    if(name === "title") {
        setTitle( value );
    }
    else{
        setDescription(value);
    }
}
// const handleDelete = () => {
//     setTitle('');
//     setDescription('');
    
    
// }

const handleSave = () => {
    if(title&&description){
    let taskObj = {};
    taskObj["Title"] = title;
    taskObj["Description"] = description;
    save(taskObj);
    }
    else{
        alert('enter valid Title and Description'); 
    }
    
}

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form action="">
            <div className="form-group" >
            <label htmlFor="title">Task Title</label>
                <input name="title" type="text" className = "form-control" value = {title} onChange = {handleChange} />
            </div>


            <div className="form-group mt-3" >
                <label htmlFor="description">Description</label>
                <textarea placeholder="plaease fill in the brief description about the task you need to do...."  name="description" id="" rows="5" className = "form-control" value = {description} onChange = {handleChange} ></textarea>
            </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={()=> {
            handleSave();
            // handleDelete(); //this function does same work as below code
            setTitle('');
            setDescription('');
        }}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
