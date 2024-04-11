import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import LabelForm from "layout/label-form";
import { useData } from "hooks/useData";

const LabelDropdown = () => {
  const { labelList, selectedLabel, updateSelectedLabel } = useData();
  const [showModal, setShowModal] = useState(false);

  const openForm = () => setShowModal(true);
  const closeForm = () => setShowModal(false);

  const selectedLabelName = () => {
    return selectedLabel !== "0"
      ? labelList.find((label) => label.id === selectedLabel)?.name
      : "All";
  };

  const handleLabelChange = (e: string) => {
    if (e !== "-1") {
      updateSelectedLabel(e);
    }
  };

  return (
    <>
      <DropdownButton
        menuAlign="right"
        onSelect={(e: string) => handleLabelChange(e)}
        bsPrefix="main-btn float-right"
        title={selectedLabelName()}
      >
        <Dropdown.Item eventKey={-1} onClick={() => openForm()}>
          <i className="fas fa-plus mr-1"></i> New label
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey={0}> All </Dropdown.Item>
        {labelList.map((label) => (
          <Dropdown.Item key={label.id} eventKey={label.id}>
            <div
              style={{ background: label.bg_color, color: label.color }}
              className="labelkey mr-3"
            >
              {label.key}
            </div>
            {label.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <LabelForm showModal={showModal} closeModal={closeForm} />
    </>
  );
};

export default LabelDropdown;
