import React from 'react';

import { Modal } from 'react-bootstrap';
const ModalLoader = ({ showModal, setShowModal, Component, entity, entityType }) => {

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <Modal
                show={showModal}
                onHide={() => closeModal()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Component
                    entity={entity}
                    entityType={entityType}
                    closeForm={() => closeModal()} />
            </Modal>
        </>
    )
}

export default ModalLoader;