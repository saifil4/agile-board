import React, { useMemo, useState, MouseEvent } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useData } from "hooks/useData";
import { priorityList, ITask } from "data";
import TaskModal from "components/task-form/TaskModal";

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

  const closeModal = () => {
    setShowModal(false);
  };

  const priority = useMemo(() => {
    return priorityList.find((pl) => pl.value === task?.priority);
  }, [task])


  const label = useMemo(() => {
    return labelList.find((label) => label.id === task.label_id);
  }, [task])


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
                title={`Priority: ${priority?.name}`}
                style={{ color: priority?.color }}
                className="fas fa-circle mr-1"
              ></i>
              {task.name}
            </div>
            <div
              style={{ background: label?.bg_color, color: label?.color }}
              className="pill"
            >
              {label?.name}
            </div>
            <div className="duedate">{task?.due_date}</div>
          </div>
        )}
      </Draggable>
      {showModal && (
        <TaskModal
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
