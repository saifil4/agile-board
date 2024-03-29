import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import LaneTitle from "./LaneTitle";
import Task from "./Task";
import TaskModal from "../task-form/TaskModal";

const Lane = ({ lane, setLanes }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTask = (newTask) => {
    console.log('new task')
    setLanes((prev) => {
      return prev.map((ln) =>
        ln.id === lane.id ? { ...ln, tasks: [...ln.tasks, newTask] } : ln
      );
    });
  };

  const updateTask = (updatedTask) => {
    console.log('updated')
    setLanes((prev) => {
      return prev.map((ln) => {
        if (ln.id === lane.id) {
          return {
            ...ln,
            tasks: ln.tasks.map((task) =>
              task.id === updatedTask.id ? updatedTask : task
            ),
          };
        }
        return ln;
      });
    });
  };

  const deleteTask = (updatedTask) => {
    setLanes((prev) => {
      return prev.map((ln) => {
        if (ln.id === lane.id) {
          return {
            ...ln,
            tasks: ln.tasks.filter((task) => task.id !== updatedTask.id),
          };
        }
        return ln;
      });
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
        showModal && <TaskModal save={addTask} showModal={showModal} closeModal={closeModal} />
      }
    </>
  );
};

export default Lane;
