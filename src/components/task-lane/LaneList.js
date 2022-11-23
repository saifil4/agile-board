import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

//importing components
import Lane from "./Lane";

const LaneList = ({ filteredLanes, setFilteredLanes, setLanes }) => {
  const handleDragEnd = (result) => {
    const updated = UpdatedLanes(result);
    if (updated) {
      setFilteredLanes(updated);
    }
  };

  const UpdatedLanes = (result) => {
    if (result && result.destination !== null) {
      const sourceid = parseInt(result.source.droppableId);
      const destionationid = parseInt(result.destination.droppableId);
      const destinationindex = parseInt(result.destination.index);
      const sourceindex = parseInt(result.source.index);
      let copiedLanes = Array.from(filteredLanes);
      if (sourceid !== destionationid) {
        let sourceLane = copiedLanes.find((lane) => lane.id === sourceid);
        const [removed] = sourceLane.tasks.splice(sourceindex, 1);
        return copiedLanes.map((lane) => {
          if (lane.id === sourceid) {
            return sourceLane;
          } else if (lane.id === destionationid) {
            let copiedtasks = Array.from(lane.tasks);
            copiedtasks.splice(destinationindex, 0, removed);
            return { ...lane, tasks: copiedtasks };
          }
          return lane;
        });
      } else {
        return copiedLanes.map((lane) => {
          if (lane.id === sourceid) {
            let copiedtasks = Array.from(lane.tasks);
            const [removedTask] = copiedtasks.splice(sourceindex, 1);
            copiedtasks.splice(destinationindex, 0, removedTask);
            return { ...lane, tasks: copiedtasks };
          }
          return lane;
        });
      }
    }
    return null;
  };

  return (
    <>
      <div className="lanecontainer">
        <DragDropContext onDragEnd={handleDragEnd}>
          {filteredLanes.map((lane) => (
            <Lane setLanes={setLanes} key={lane.id} lane={lane} />
          ))}
        </DragDropContext>
      </div>
    </>
  );
};

export default LaneList;
