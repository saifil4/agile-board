import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Container, Row, Col } from 'react-bootstrap';

const TaskModal = ({ showModal, closeModal }) => {

    const [task, setTask] = useState(
        {
            id: Math.random() * 1000,
            labelid: 1,
            taskname: 'Misspelling on Navbar',
            description: 'this is a demo description',
            duedate: '2021-02-12',
            priority: 3,
            laneid: 1
        }
    )

    return (
        <>
            <Modal
                show={showModal}
                onHide={() => closeModal()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title as="h6" id="contained-modal-title-vcenter">
                        New Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col md="8">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Type" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" as="textarea" placeholder="Description" />
                                    </Form.Group>

                                </Col>
                                <Col md="4">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Due date</Form.Label>
                                        <Form.Control type="date" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Priority</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="main-btn yellow" type="submit">Create Task</button>
                    <button className="main-btn grey" variant="secondary" >Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TaskModal;