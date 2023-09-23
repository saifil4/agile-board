import { ChangeEvent, useState } from "react";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Form, Container, Row, Col } from "react-bootstrap";
import { ITask, priorityList } from "data";
import { useData } from "hooks/useData";
import { TextInput, DateInput, Select } from "components/form";

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

interface ITaskFormProps {
  showModal: boolean,
  closeModal: () => void,
  task?: ITask | null,
  save: (task: ITask) => void,
  deleteTask?: (task: ITask) => void
}

const TaskForm = ({ showModal, closeModal, task = null, save, deleteTask }: ITaskFormProps) => {

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
                <Select
                  label="Label"
                  value={selectedTask.label_id}
                  name="label_id"
                  onChange={handeChange}
                >
                  {
                    labelList.map((label) => (
                      <option value={label.id}>
                        {label.name}
                      </option>
                    ))
                  }
                </Select>
                <TextInput
                  type="text"
                  label="Name"
                  value={selectedTask.name}
                  name="name"
                  onChange={handeChange}
                />
                <TextInput
                  label="Description"
                  type="textarea"
                  value={selectedTask.description}
                  name="description"
                  onChange={handeChange}
                />
              </Col>
              <Col md="4">
                <DateInput
                  label="Due date"
                  value={selectedTask.due_date}
                  name="due_date"
                  onChange={handeChange}
                />
                <Select
                  key=""
                  label="Priority"
                  value={selectedTask.priority}
                  name="priority"
                  onChange={handeChange}
                >
                  {
                    priorityList.map((pl) => (
                      <option value={pl.value}>
                        {pl.name}
                      </option>
                    ))
                  }
                </Select>
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

export default TaskForm;
