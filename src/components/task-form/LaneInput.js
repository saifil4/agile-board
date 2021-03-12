import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';

const LaneInput = ({ entity, laneId, setLaneId, entityType }) => {
    const lanes = useSelector(state => state.Lanes);
    const [laneName, setLaneName] = useState();

    useEffect(() => {
        if (laneId) {
            setLaneName(lanes.find(lane => lane.id === parseInt(laneId)).lanename);
        }
    }, [laneId])

    return (
        <>
            {
                laneId
                    ?
                    <Dropdown eventKey={laneId} onSelect={e => setLaneId(e)}>
                        < Dropdown.Toggle eventKey={laneId} variant="success" id="dropdown-basic" >
                            {laneName}
                        </Dropdown.Toggle >
                        <Dropdown.Menu>
                            {
                                lanes.map(lane => (
                                    <Dropdown.Item eventKey={lane.id} >{lane.lanename}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown >
                    :
                    <span></span>
            }
        </>
    )
}

export default LaneInput;