import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Lane from "components/task-lane/Lane";
import { ILane } from "data";
import { Dispatch } from "react";

interface ILaneListProps {
  filteredLanes: ILane[],
  setFilteredLanes: Dispatch<React.SetStateAction<ILane[]>>,
  setLanes: Dispatch<React.SetStateAction<ILane[]>>
}

const LaneList = ({ filteredLanes, setFilteredLanes, setLanes }: ILaneListProps) => {
  const handleDragEnd = (result: DropResult) => {
    const updated = UpdatedLanes(result);
    if (updated) {
      setFilteredLanes(updated);
    }
  };

  const UpdatedLanes = (result: DropResult) => {
    if (result && result.destination !== null) {
      const source_id = result.source.droppableId;
      const sourceindex = result.source.index;
      const destionation_id = result.destination?.droppableId;
      const destination_index = result.destination?.index;
      let copiedLanes = Array.from(filteredLanes);
      if (source_id !== destionation_id) {
        let sourceLane = copiedLanes.find((lane) => lane.id === source_id);
        if (sourceLane !== undefined && sourceLane !== null) {
          const [removed] = sourceLane.tasks.splice(sourceindex, 1);
          return copiedLanes.map((lane) => {
            if (lane.id === source_id) {
              return sourceLane ? sourceLane : lane; //work around not ideal should be return sourcelane
            } else if (lane.id === destionation_id && destination_index !== undefined) {
              let copiedtasks = Array.from(lane.tasks);
              copiedtasks.splice(destination_index, 0, removed);
              return { ...lane, tasks: copiedtasks };
            }
            return lane;
          });
        }
      } else {
        return copiedLanes.map((lane) => {
          if (lane.id === source_id && destination_index !== undefined) {
            let copiedtasks = Array.from(lane.tasks);
            const [removedTask] = copiedtasks.splice(sourceindex, 1);
            copiedtasks.splice(destination_index, 0, removedTask);
            return { ...lane, tasks: copiedtasks };
          }
          return lane;
        });
      }
    }
    return null
  };

  return (
    <>
      <div className="lanecontainer">
        <DragDropContext onDragEnd={(e) => handleDragEnd(e)}>
          {filteredLanes.map((lane) => (
            <Lane setLanes={setLanes} key={lane.id} lane={lane} />
          ))}
        </DragDropContext>
      </div>
    </>
  );
};

export default LaneList;
