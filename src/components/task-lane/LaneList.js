import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { replaceTasks } from '../../actions/actions'

//importing components
import Lane from './Lane'

const LaneList = () => {
    // const CreateLane = (e) => {
    //     setLanes([...lanes, {
    //         id: Math.random() * 1000,
    //         lanename: 'Demo Lane'
    //     }
    //     ]);
    //     console.log(lanes);
    // }      
    const Lanes = useSelector(state => state.Lanes);
    const tasks = useSelector(state => state.Tasks)

    const Dispatch = useDispatch();


    // const handleDragEnd = (result) => {
    //     if (result.source.droppableId !== result.destination.droppableId) {
    //         Dispatch(changeLane(result));
    //     } else if (result.source.index !== result.destination.index) {
    //         Dispatch(changeOrder(result));
    //     }
    // }

    const handleDragEnd = (result) => {

        //checking if destination pos is empty

        const lanesourceid = parseInt(result.source.droppableId);
        const lanedestionationid = parseInt(result.destination.droppableId);
        const lanedestinationindex = parseInt(result.destination.index);

        const lanesource = tasks.find(task => task.laneid === lanesourceid);
        const destinationlane = tasks.filter(task => task.laneid === lanedestionationid)[lanedestinationindex];

        let updatedtasks = tasks;
        if (lanesourceid !== lanedestionationid) {
            updatedtasks = tasks.map(task => {
                if (task.id === parseFloat(result.draggableId)) {
                    return { ...task, laneid: parseInt(lanedestionationid) }
                }
                return task;
            })
        }
        Dispatch(replaceTasks(updatedtasks));
    }


    return (
        <>
            <DragDropContext onDragEnd={handleDragEnd}>
                {
                    Lanes.map(lane => (
                        <Lane
                            key={lane.id}
                            lane={lane} />
                    ))
                }
            </DragDropContext>

            {/* <div className="addlanecontainer">
                <h6 className="lane-title"></h6>
                <div className="addlane">
                    <i onClick={CreateLane} className="fas fa-plus-circle addlane-icon"></i>
                </div>
            </div> */}


        </>
    )
}

export default LaneList;