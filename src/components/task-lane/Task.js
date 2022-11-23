import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TaskModal from "../task-form/TaskModal";
import { useData } from "../../DataContext";
import { priorityList } from "../../data";

const Task = ({ index, task, updateTask, deleteTask }) => {
  const { labelList } = useData();
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const priorityColor = () => {
    return priorityList.find((pl) => pl.value === task.priority).color;
  };
  const priorityName = () => {
    return priorityList.find((pl) => pl.value === task.priority).name;
  };

  const getLabel = () => {
    return labelList.find((label) => label.id === task.labelid);
  };

  const Label = getLabel();

  return (
    <>
      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="taskcard"
            onClick={(e) => openModal(e)}
          >
            <div className="title">
              <i
                title={`Priority: ${priorityName()}`}
                style={{ color: priorityColor() }}
                className="fas fa-circle mr-1"
              ></i>
              {task.taskname}
            </div>
            <div
              style={{ background: Label.bgcolor, color: Label.color }}
              className="pill"
            >
              {Label.name}
            </div>
            <div className="duedate">{task.duedate}</div>
          </div>
        )}
      </Draggable>
      <TaskModal
        task={task}
        save={updateTask}
        deleteTask={deleteTask}
        showModal={showModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default Task;
