import { ReactNode } from "react";
import { Droppable as ReactDroppable } from "react-beautiful-dnd";

interface IDroppableProps {
    droppableId: string,
    children: ReactNode
}

const Droppable = ({ droppableId, children }: IDroppableProps) => {
    return (
        <ReactDroppable droppableId={droppableId}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {children}
                    {provided.placeholder}
                </div>
            )}
        </ReactDroppable>
    )
}

export default Droppable