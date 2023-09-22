import { ILane } from "data";
import { Dispatch, useState, KeyboardEvent } from "react";

interface ILaneTitle {
  lane: ILane,
  setLanes: Dispatch<React.SetStateAction<ILane[]>>
}

const LaneTitle = ({ lane, setLanes }: ILaneTitle) => {
  const [showTextField, setShowTextField] = useState(false);
  const [laneName, setLaneName] = useState(lane.name);

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

  const handleInputClick = (e: KeyboardEvent<HTMLElement>) => {
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
          onKeyDown={handleInputClick}
          onBlur={handleBlur}
          className={laneTitleInputClass()}
          type="text"
        />
      ) : (
        <h6 onClick={handleTextClick} className="lane-title">
          {lane.name}
          <i className="fas fa-pencil-alt"></i>
        </h6>
      )}
    </>
  );
};
export default LaneTitle;
