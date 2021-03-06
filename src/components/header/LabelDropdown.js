import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedLabel } from '../../actions/actions'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ModalLoader from '../ModalLoader';
import LabelForm from '../label-form/LabelForm'

const LabelDropdown = () => {
    const selectedLabel = useSelector(state => state.SelectedLabel);
    const labelList = useSelector(state => state.labelList);
    const [showModal, setShowModal] = useState(false);
    const Dispatch = useDispatch()

    const OpenForm = () => {
        setShowModal(true);
    }

    const selectedLabelName = () => {
        console.log(selectedLabel);
        return selectedLabel !== 0 ? labelList.find(label => label.id === selectedLabel).name : 'All';
    }

    const handleLabelChange = (e) => {
        const labelid = parseFloat(e);
        if (labelid !== -1) {
            Dispatch(setSelectedLabel(labelid))
        }
    }

    return (
        <>
            <DropdownButton menuAlign="right" onSelect={(e) => handleLabelChange(e)} bsPrefix="main-btn float-right" title={selectedLabelName()}>
                <Dropdown.Item eventKey={-1} onClick={() => OpenForm()}>
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
            <ModalLoader
                showModal={showModal}
                setShowModal={setShowModal}
                Component={LabelForm} />
        </>

    )
}

export default LabelDropdown;