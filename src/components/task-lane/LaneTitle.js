import React, { useState } from "react";

const LaneTitle = ({ lane, setLanes }) => {
  const [showTextField, setShowTextField] = useState(false);
  const [laneName, setLaneName] = useState(lane.lanename);

  const updateLaneAndClose = () => {
    if (laneName) {
      changeName();
      setShowTextField(false);
    }
  };

  const changeName = () => {
    setLanes((prev) => {
      return prev.map((ln) =>
        ln.id === lane.id ? { ...ln, lanename: laneName } : ln
      );
    });
  };

  const handleBlur = () => {
    updateLaneAndClose();
  };

  const handleInputClick = (e) => {
    if (e.charCode === 13) {
      updateLaneAndClose();
    }
  };

  const handleTextClick = () => {
    setShowTextField(true);
  };

  const laneTitleInputClass = () => {
    return "lane-title-input" + (laneName ? "" : " error");
  };
  
  return (
    <>
      {showTextField ? (
        <input
          value={laneName}
          autoFocus
          onChange={(e) => setLaneName(e.target.value)}
          onKeyPress={handleInputClick}
          onBlur={handleBlur}
          className={laneTitleInputClass()}
          type="text"
        />
      ) : (
        <h6 onClick={handleTextClick} className="lane-title">
          {lane.lanename}
          <i className="fas fa-pencil-alt"></i>
        </h6>
      )}
    </>
  );
};
export default LaneTitle;
