import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

//importing components
import Lane from './Lane'

const LaneList = ({ filteredLanes, setFilteredLanes, setLanes }) => {

    const handleDragEnd = (result) => {
        setFilteredLanes(UpdatedLanes(result));
    }

    const UpdatedLanes = (result) => {
        const sourceid = parseInt(result.source.droppableId);
        const destionationid = parseInt(result.destination.droppableId);
        const destinationindex = parseInt(result.destination.index);
        const sourceindex = parseInt(result.source.index);
        if (sourceid !== destionationid) {
            let removedTask = null;
            filteredLanes = filteredLanes.map(lane => {
                if (lane.id === sourceid) {
                    removedTask = lane.tasks.splice(sourceindex, 1);
                    removedTask.laneid = destionationid;
                    return lane;
                }
                return lane;
            })
            return filteredLanes.map(lane => {
                if (lane.id === destionationid) {
                    let copiedtasks = lane.tasks;
                    copiedtasks.splice(destinationindex, 0, removedTask);
                    return { ...lane, tasks: [].concat.apply([], copiedtasks) };
                }
                return lane;
            });
        } else {
            return filteredLanes.map(lane => {
                if (lane.id === destionationid) {
                    let copiedtasks = lane.tasks;
                    const removedTask = copiedtasks.splice(sourceindex, 1);
                    copiedtasks.splice(destinationindex, 0, removedTask);
                    console.log(copiedtasks);
                    return { ...lane, tasks: [].concat.apply([], copiedtasks) };
                }
                return lane;
            });
        }
    }

    return (
        <>
            <div className="lanecontainer">
                <DragDropContext onDragEnd={handleDragEnd}>
                    {
                        filteredLanes.map(lane => (
                            <Lane
                                setLanes={setLanes}
                                key={lane.id}
                                lane={lane} />
                        ))
                    }
                </DragDropContext>
            </div>
        </>
    )
}

export default LaneList;