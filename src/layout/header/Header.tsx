import { Navbar} from 'react-bootstrap';

interface IHeaderProps {
    handleSearch: (searchParam: string) => void
}

const Header = ({ handleSearch }: IHeaderProps) => {
    return (
        <Navbar expand="lg" bg='white' style={{ width: "100%", height: "52px" }}>
            <Navbar.Brand as="h5" bsPrefix="logo" href="#home">
                <i className="fas fa-check-double mr-2"></i>Board
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    )
}

export default Header;