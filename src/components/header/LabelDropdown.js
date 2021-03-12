import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { switchlabelformmodal, setSelectedLabel } from '../../actions/actions'

import { Dropdown, DropdownButton } from 'react-bootstrap';

const LabelDropdown = () => {
    const selectedLabel = useSelector(state => state.selectedLabel);
    const labelList = useSelector(state => state.labelList);
    const Dispatch = useDispatch()

    const selectedLabelName = () => {
        return selectedLabel !== 0 ? labelList.find(label => label.id === selectedLabel).name : 'All';
    }

    const handleLabelChange = (e) => {
        const labelid = parseInt(e);
        if (labelid !== -1) {
            console.log('im in')
            Dispatch(setSelectedLabel(labelid))
        }
    }

    const handleFormOpen = () => {
        Dispatch(switchlabelformmodal())
    }

    return (
        <>
            <DropdownButton onSelect={(e) => handleLabelChange(e)} bsPrefix="main-btn float-right mr-4"  title={selectedLabelName()}>
                <Dropdown.Item eventKey={-1} onClick={() => handleFormOpen()}>
                    <i className="fas fa-plus mr-1"></i> New label
                     </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey={0}>  All </Dropdown.Item>
                {
                    labelList.map(label => (
                        <Dropdown.Item key={label.id} eventKey={label.id}>
                            <div style={{ 'background': label.bgcolor, 'color': label.color }}
                                className="labelkey mr-3">{label.key}</div>
                            {label.name}
                        </Dropdown.Item>
                    ))
                }
            </DropdownButton>
        </>

    )
}

export default LabelDropdown;