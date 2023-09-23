import { Container as BootstrapContainer, Row as BootstrapRow, Col as BootstrapCol } from 'react-bootstrap';
import Search from 'layout/header/Search';
import LabelDropdown from 'layout/header/LabelDropdown';
import { styled } from 'styled-components'


interface IHeaderProps {
    handleSearch: (searchParam: string) => void
}

const Submenu = ({ handleSearch }: IHeaderProps) => {
    return (
        <Container fluid >
            <Row>
                <Col>

                </Col>
                <Col>
                    <Search handleSearch={handleSearch} />
                </Col>
                <Col>
                    <LabelDropdown />
                </Col>
            </Row>
        </Container>
    )
}

export default Submenu;

const Container = styled(BootstrapContainer)`
    background: #ececec;
`

const Row = styled(BootstrapRow)`
    height: 48px;
    align-items: center;
`

const Col= styled(BootstrapCol)`
    
`