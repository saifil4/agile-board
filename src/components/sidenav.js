import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNav = ({
    setNavOpenStatus,
    navOpenStatus,
    labelList,
    setLabelList,
    setLabelFormShow,
    selectedLabel,
    setSelectedLabel }) => {
    const navStatusHandler = () => {
        setNavOpenStatus(!navOpenStatus);
    }
    const LabelFormVisibilityHandler = () => {
        setLabelFormShow(true);
    }

    const SelectedLabelHandler = (value) => {
        setSelectedLabel(value);
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <i style={{ position: 'absolute' }} onClick={navStatusHandler} className="fas fa-bars menu-icon mr-5"></i>
                <h3 className="logo">
                    <i className="fas fa-check-double mr-2"></i>Board
                </h3>
            </div>
            <ul className="side-nav">
                <label className="menu-label">
                    LABELS
                    <i onClick={LabelFormVisibilityHandler} class="fas fa-plus-circle add-icon"></i>
                </label>
                <li className={`${selectedLabel === 0 ? "selected" : ""}`} onClick={(e) => SelectedLabelHandler(0)} value="0">
                    <i className="fas fa-tag mr-4"></i>All
                </li>
                {
                    labelList.map(label => (
                        <li className={`${selectedLabel === label.id ? "selected" : ""}`} onClick={(e) => SelectedLabelHandler(e.target.value)} value={label.id}>
                            <i className={`${label.iconclass} mr-4`}></i>{label.name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default SideNav;