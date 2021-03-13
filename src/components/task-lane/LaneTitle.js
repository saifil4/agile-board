import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLaneName } from '../../actions/actions'

const LaneTitle = ({ lane }) => {
    const [showTextField, setShowTextField] = useState(false);
    const Dispatch = useDispatch();
    const [laneName, setLaneName] = useState(lane.lanename);

    const updateLaneAndClose = () => {
        if (laneName) {
            Dispatch(updateLaneName(getUpdatedLane()));
            setShowTextField(false);
        }
    }

    const handleBlur = () => {
        updateLaneAndClose();
    }

    const handleInputClick = (e) => {
        if (e.charCode === 13) {
            updateLaneAndClose();
        }
    }

    const handleTextClick = () => {
        setShowTextField(true);
    }

    const getUpdatedLane = () => {
        return {
            id: lane.id,
            lanename: laneName
        }
    }

    const laneTitleInputClass = () => {
        return 'lane-title-input' + (laneName ? '' : ' error')
    }
    return (
        <>
            {
                showTextField
                    ?
                    <input
                        value={laneName}
                        autoFocus
                        onChange={e => setLaneName(e.target.value)}
                        onKeyPress={handleInputClick}
                        onBlur={handleBlur}
                        className={laneTitleInputClass()}
                        type="text" />
                    :
                    <h6
                        onClick={handleTextClick}
                        className="lane-title">
                        {lane.lanename}
                        <i className="fas fa-pencil-alt"></i>
                    </h6>
            }
        </>
    )
}
export default LaneTitle;