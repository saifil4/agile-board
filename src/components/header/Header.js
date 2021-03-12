import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Form, } from 'react-bootstrap';
import { search } from '../../actions/actions'
import LabelDropdown from './LabelDropdown';
const Header = () => {
    const Dispatch = useDispatch();
    const searchKeywords = useSelector(state => state.Search);

    return (
        <div className="filtercontainer">
            <Navbar expand="lg">
                <Navbar.Brand as="h5" bsPrefix="logo" href="#home">
                    <i className="fas fa-check-double mr-2"></i>Board
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <input type="text" className="searchbox mr-4" onChange={(e) => Dispatch(search(e.target.value))} placeholder="Search" />
                        <LabelDropdown />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;