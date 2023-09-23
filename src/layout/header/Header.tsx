import { Navbar, Form, } from 'react-bootstrap';
import LabelDropdown from './LabelDropdown';
import Search from './Search';

interface IHeaderProps {
    handleSearch: (searchParam: string) => void
}

const Header = ({ handleSearch }: IHeaderProps) => {
    return (
        <div className="filtercontainer">
            <Navbar expand="lg">
                <Navbar.Brand as="h5" bsPrefix="logo" href="#home">
                    <i className="fas fa-check-double mr-2"></i>Board
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <Search handleSearch={handleSearch} />
                        <LabelDropdown />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;