import { ReactNode } from "react";
import { Draggable as ReactDraggable } from "react-beautiful-dnd";

interface IDroppableProps {
    draggableId: string,
    index: number,
    children: ReactNode
}

const Droppable = ({ draggableId, index, children }: IDroppableProps) => {
    return (
        <ReactDraggable draggableId={draggableId} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {children}
                </div>
            )}
        </ReactDraggable>
    )
}

export default Droppable