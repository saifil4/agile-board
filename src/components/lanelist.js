import React from 'react';
import '../App.css';

//importing components
import Lane from './lane'

const LaneList = ({ lanes, setLanes }) => {
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

            {
                lanes.map(lane => (
                    <Lane
                        key={lane.id}
                        lane={lane} />
                ))
            }
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