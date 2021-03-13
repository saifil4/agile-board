import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateLanes } from '../../actions/actions'

//importing components
import Lane from './Lane'

const LaneList = () => {

    const Lanes = useSelector(state => state.Lanes);
    const filteredLanes = useSelector(state => state.FilteredLanes);

    const Dispatch = useDispatch();

    const handleDragEnd = (result) => {
        Dispatch(updateLanes(UpdatedLanes(result)));
    }

    const UpdatedLanes = (result) => {
        const sourceid = parseInt(result.source.droppableId);
        const destionationid = parseInt(result.destination.droppableId);
        const destinationindex = parseInt(result.destination.index);
        const sourceindex = parseInt(result.source.index);
        if (sourceid !== destionationid) {
            let removedTask = null;
            Lanes.map(lane => {
                if (lane.id === sourceid) {
                    removedTask = lane.tasks.splice(sourceindex, 1);
                    removedTask.laneid = destionationid;
                }
            })
            return Lanes.map(lane => {
                if (lane.id === destionationid) {
                    let copiedtasks = lane.tasks;
                    copiedtasks.splice(destinationindex, 0, removedTask);
                    return { ...lane, tasks: [].concat.apply([], copiedtasks) };
                }
                return lane;
            });
        } else {
            return Lanes.map(lane => {
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