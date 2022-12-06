import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Form, Container, Row, Col } from "react-bootstrap";
import TaskTypeInput from "./TaskTypeInput";
import NameInput from "./NameInput";
import DescriptionInput from "./DescriptionInput";
import DueDateInput from "./DueDateInput";
import PriorityInput from "./PriorityInput";

const getDefaultTask = () => {
  return {
    id: uuidv4(),
    labelid: 1,
    taskname: "",
    description: "",
    duedate: "",
    priority: 1,
  };
};

const TaskModal = ({
  showModal,
  closeModal,
  task = null,
  save,
  deleteTask,
}) => {
  console.log(task);

  const defaultTask = getDefaultTask();

  const [selectedTask, setSelectedTask] = useState(task ? task : defaultTask);

  const handleSave = () => {
    save(selectedTask);
    closeModal();
  };

  const handleClose = () => {
    if (task) setSelectedTask(task);
    closeModal();
  };

  const handleDelete = () => {
    deleteTask(selectedTask);
  };

  const handeChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    if (name === "labelid" || name === "priority") value = parseInt(value);
    setSelectedTask({ ...selectedTask, [name]: value });
  };

  return (
    <Modal show={showModal} onHide={() => closeModal()} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title as="h6">New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Col md="8">
                <TaskTypeInput
                  value={selectedTask.labelid}
                  name="labelid"
                  onChange={handeChange}
                />
                <NameInput
                  value={selectedTask.taskname}
                  name="taskname"
                  onChange={handeChange}
                />
                <DescriptionInput
                  value={selectedTask.description}
                  name="description"
                  onChange={handeChange}
                />
              </Col>
              <Col md="4">
                <DueDateInput
                  value={selectedTask.duedate}
                  name="duedate"
                  onChange={handeChange}
                />
                <PriorityInput
                  value={selectedTask.priority}
                  name="priority"
                  onChange={handeChange}
                />
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {task && (
          <button className="main-btn red" onClick={handleDelete}>
            Delete
          </button>
        )}
        <button className="main-btn yellow" type="submit" onClick={handleSave}>
          {" "}
          {task ? "Update Task" : "Create Task"}
        </button>
        <button className="main-btn grey" onClick={handleClose}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
