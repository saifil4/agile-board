import { Dispatch, useState, MouseEvent } from "react";
import { Droppable } from "react-beautiful-dnd";
import LaneTitle from "./LaneTitle";
import Task from "./Task";
import TaskModal from "../task-form/TaskModal";
import { ILane, ITask } from "data";

interface ILaneProps {
  lane: ILane,
  setLanes: Dispatch<React.SetStateAction<ILane[]>>
}

const Lane = ({ lane, setLanes }: ILaneProps) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTask = (newTask: ITask) => {
    setLanes((prev) => {
      return prev.map((ln) =>
        ln.id === lane.id ? { ...ln, tasks: [...ln.tasks, newTask] } : ln
      );
    });
  };

  const updateTask = (updatedTask: ITask) => {
    setLanes((prev) => {
      return prev.map((ln) =>
        ln.id === lane.id ?
          { ...ln, tasks: ln.tasks.map((task) => task.id === updatedTask.id ? updatedTask : task) } : ln
      );
    });
  };

  const deleteTask = (deletedTask: ITask) => {
    setLanes((prev) => {
      return prev.map((ln) =>
        ln.id === lane.id ?
          { ...ln, tasks: ln.tasks.filter((task) => task.id !== deletedTask.id) } : ln
      );
    });
  };

  return (
    <>
      <div className="lane">
        <LaneTitle lane={lane} setLanes={setLanes} />
        <div onClick={(e) => openModal(e)} className="add-button">
          <i className="fas fa-plus"></i>
        </div>
        <Droppable droppableId={lane.id.toString()} key={lane.id}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="lane-body"
            >
              {lane.tasks.map((task, index) => (
                <Task
                  deleteTask={deleteTask}
                  index={index}
                  updateTask={updateTask}
                  key={task.id}
                  task={task}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      {
        showModal && <TaskModal showModal={showModal} closeModal={closeModal} save={addTask} />
      }
    </>
  );
};

export default Lane;
