import React, { useMemo, useState, MouseEvent } from "react";
import { useData } from "hooks/useData";
import { priorityList, ITask } from "data";
import TaskForm from "layout/task-form";
import { styled } from 'styled-components';
import Draggable from "components/drag-drop/Draggable";

interface ITaskProps {
  task: ITask,
  index: number,
  updateTask: (task: ITask) => void,
  deleteTask: (task: ITask) => void
}

const Task = ({ index, task, updateTask, deleteTask }: ITaskProps) => {
  const { labelList } = useData();
  const [showModal, setShowModal] = useState(false);

  const openModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const priority = useMemo(() => priorityList.find((pl) => pl.value === task?.priority), [task])

  const label = useMemo(() => labelList.find((label) => label.id === task.label_id), [task, labelList])

  return (
    <>
      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
        <div
          className="taskcard"
          onClick={(e) => openModal(e)}>
          <Title className="title">
            <i
              title={`Priority: ${priority?.name}`}
              style={{ color: priority?.color }}
              className="fas fa-circle mr-1"
            ></i>
            {task.name}
          </Title>
          <div
            style={{ background: label?.bg_color, color: label?.color }}
            className="pill"
          >
            {label?.name}
          </div>
          <div className="duedate">{task?.due_date}</div>
        </div>
      </Draggable>
      {showModal && (
        <TaskForm
          task={task}
          save={updateTask}
          deleteTask={deleteTask}
          showModal={showModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default React.memo(Task);


const Title = styled.div({
  color: '#42526e',
  marginBottom: '5px',
  fontWeight: 500,
  fontSize: "14px"
})

