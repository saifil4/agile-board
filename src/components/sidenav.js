import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchnav, switchlabelformmodal, setSelectedLabel } from '../actions/actions'

const SideNav = () => {

    const selectedLabel = useSelector(state => state.selectedLabel);
    const labelList = useSelector(state => state.labelList);
    const Dispatch = useDispatch()

    const labelClass = (labelid) => {
        return selectedLabel === labelid ? "selected" : ""
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <i style={{ position: 'absolute' }} onClick={() => Dispatch(switchnav())} className="fas fa-bars menu-icon mr-5"></i>
                <h4 className="logo">
                    <i style={{fontSize:"20px"}} className="fas fa-check-double mr-1"></i>Board
                </h4>
            </div>
            <ul className="side-nav">
                <label className="menu-label">
                    LABELS
                    <i onClick={() => Dispatch(switchlabelformmodal())}
                        className="fas fa-plus-circle add-icon">
                    </i>
                </label>
                <li className={labelClass(0)}
                    onClick={(e) => Dispatch(setSelectedLabel(0))}
                    value="0">
                        All
                </li>
                {
                    labelList.map(label => (
                        <li key={label.id}
                            className={labelClass(label.id)}
                            onClick={(e) => Dispatch(setSelectedLabel(e.target.value))}
                            value={label.id}>
                            <div style={{ 'background': label.color }} class="labelkey mr-3">{label.key}</div>
                            {/* <i className={`${label.iconclass} mr-4`}></i> */}
                            {label.name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default SideNav;