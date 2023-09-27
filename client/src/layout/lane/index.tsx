import { Dispatch, useState, MouseEvent } from "react";
import { ILane, ITask } from "data";
import { styled } from 'styled-components'
import LaneTitle from "layout/lane/LaneTitle";
import Task from "layout/task";
import TaskForm from "layout/task-form";
import Droppable from "components/drag-drop/Droppable";

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
        ln.id === lane.id ?
          { ...ln, tasks: [...ln.tasks, newTask] } : ln
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

  // const triggerAction = (action: "update" | "add" | "delete", selectedTask: ITask) => {
  //   setLanes((prev) => {
  //     return prev.map((ln) => {
  //       if (ln.id === lane.id) {
  //         let tasks = ln.tasks;
  //         if (action === 'add') tasks = [...ln.tasks, selectedTask];
  //         else if (action === 'update') tasks = ln.tasks.map((task) => task.id === selectedTask.id ? selectedTask : task);
  //         else if (action === 'delete') tasks = ln.tasks.filter((task) => task.id !== selectedTask.id)
  //         return { ...ln, tasks: tasks }
  //       }
  //       return ln
  //     });
  //   });
  // };

  return (
    <>
      <LaneContainer>
        <LaneTitle lane={lane} setLanes={setLanes} />
        <AddButton onClick={(e) => openModal(e)}>
          <i className="fas fa-plus"></i>
        </AddButton>
        <Droppable droppableId={lane.id.toString()} key={lane.id}>
          <LaneBody>
            {lane.tasks.map((task, index) => (
              <Task
                deleteTask={deleteTask}
                index={index}
                updateTask={updateTask}
                key={task.id}
                task={task}
              />
            ))}
          </LaneBody>
        </Droppable>
      </LaneContainer>
      {
        showModal && <TaskForm showModal={showModal} closeModal={closeModal} save={addTask} />
      }
    </>
  );
};

export default Lane;


const LaneContainer = styled.div({
  height: "calc(100% - 10px)",
  width: "275px",
  margin: "0px 10px 0px 10px",
  paddinBottom: "10px",
  display: "inline-block",
  verticalAlign: "top",
});

const AddButton = styled.div({
  width: "100%",
  padding: "2px",
  textAlign: "center",
  background: "white",
  border: "1px solid #ebecf0",
  borderRadius: "0.25rem",
  marginBottom: "5px",
  color: "#42526e",
  fonSize: "14px",
  cursor: "pointer",
})

const LaneBody = styled.div({
  height: "calc(100% - 50px)",
  width: "100%",
  borderRadius: "5px"
})
