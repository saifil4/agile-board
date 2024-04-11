import Header from "layout/header/Header";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { IWorkspace } from "data";
import WorkSpaceSettings from "layout/workspace-settings";

const Dashboard = () => {

  const [workSpaces, setWorkSpaces] = useState<Array<IWorkspace>>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<IWorkspace | null>(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  }

  const openModal = (workspace: IWorkspace) => {
    setSelectedWorkspace(workspace);
    setShowModal(true);
  }


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/workspace/get-all/');
        const data = await res.json();
        setWorkSpaces(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [])


  return (
    <main className="wrapper">
      <Header />
      <Container>
        <Table striped bordered hover>
          {
            workSpaces.map((workspace) => (
              <tr>
                <td>{workspace.id}</td>
                <td>{workspace.name}</td>
                <td>
                  <button>Open</button>
                  <button onClick={() => openModal(workspace)}>Settings</button>
                </td>
              </tr>
            ))
          }
        </Table>
      </Container>
      <WorkSpaceSettings showModal={showModal} closeModal={closeModal} workspace={selectedWorkspace} />
    </main>
  )
}

export default Dashboard