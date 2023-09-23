import { ChangeEvent, useState } from "react";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Form, Container, Row, Col } from "react-bootstrap";
import { ITask, priorityList } from "data";
import Input from "./Input";
import { useData } from "hooks/useData";

const getDefaultTask = () => {
  const task: ITask = {
    id: uuidv4(),
    label_id: "1",
    name: "",
    description: "",
    due_date: "",
    priority: 1,
  }
  return task;
};

interface ITaskModal {
  showModal: boolean,
  closeModal: () => void,
  task?: ITask | null,
  save: (task: ITask) => void,
  deleteTask?: (task: ITask) => void
}

const TaskModal = ({ showModal, closeModal, task = null, save, deleteTask }: ITaskModal) => {

  const defaultTask = getDefaultTask();
  const { labelList } = useData();

  const [selectedTask, setSelectedTask] = useState<ITask>(task ? task : defaultTask);

  const handleSave = () => {
    save(selectedTask);
    closeModal();
  };

  const handleClose = () => {
    if (task) setSelectedTask(task);
    closeModal();
  };

  const handleDelete = () => {
    if (deleteTask) {
      deleteTask(selectedTask);
    }
  };

  const handeChange = (e: ChangeEvent<any>) => {
    let value = e.target.value;
    const name = e.target.name;
    if (name === "priority") value = parseInt(value);
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
                <Input
                  label="Label"
                  type="select"
                  value={selectedTask.label_id}
                  name="label_id"
                  onChange={handeChange}
                >
                  {
                    labelList.map(label => (
                      <option value={label.id} key={label.id}>
                        {label.name}
                      </option>
                    ))
                  }
                </Input>
                <Input
                  type="text"
                  label="Name"
                  value={selectedTask.name}
                  name="name"
                  onChange={handeChange}
                />
                <Input
                  label="Description"
                  type="textarea"
                  value={selectedTask.description}
                  name="description"
                  onChange={handeChange}
                />
              </Col>
              <Col md="4">
                <Input
                  label="Due date"
                  type="date"
                  value={selectedTask.due_date}
                  name="due_date"
                  onChange={handeChange}
                />
                <Input
                  label="Priority"
                  type="select"
                  value={selectedTask.priority}
                  name="priority"
                  onChange={handeChange}
                >
                  {priorityList.map((pl, index) => (
                    <option key={index} value={pl.value}>{pl.name}</option>
                  ))}
                </Input>
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
