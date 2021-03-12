import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { deleteTask } from '../../actions/actions'

//importing components
import Lane from './Lane'

const LaneList = () => {

    const Lanes = useSelector(state => state.Lanes);
    const filteredLanes = useSelector(state => state.FilteredLanes);

    const Dispatch = useDispatch();

    const handleDragEnd = (result) => {
        const lanesourceid = parseInt(result.source.droppableId);
        const lanedestionationid = parseInt(result.destination.droppableId);
        const lanedestinationindex = parseInt(result.destination.index);
        const lanesourceindex = parseInt(result.source.index);
        const taskid = parseFloat(result.draggableId);


        if (lanesourceid !== lanedestionationid) {
            console.log('different lane')
            // var newArray = (Lane.slice(0, lanedestinationindex), taskid, Lane.slice(lanedestinationindex + 1, Lane.length)
        } else {
            if (lanedestinationindex > lanesourceindex) {
                console.log('moved down from ' + lanesourceindex + ' to ' + lanedestinationindex);
            } else if (lanedestinationindex < lanesourceindex) {
                console.log('moved up from ' + lanesourceindex + ' to ' + lanedestinationindex);
            }
        }
    }

    const DeleteTask = (id) => {
        Dispatch(deleteTask(id));
    }

    // const CreateLane = (e) => {
    //     setLanes([...lanes, {
    //         id: Math.random() * 1000,
    //         lanename: 'Demo Lane'
    //     }
    //     ]);
    //     console.log(lanes);
    // }  

    return (
        <>
            <DragDropContext onDragEnd={handleDragEnd}>
                {
                    filteredLanes.map(lane => (
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