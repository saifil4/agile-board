import { ILane } from "data";
import { Dispatch, useState, KeyboardEvent, useMemo } from "react";

interface ILaneTitle {
  lane: ILane,
  setLanes: Dispatch<React.SetStateAction<ILane[]>>
}

const LaneTitle = ({ lane, setLanes }: ILaneTitle) => {
  const [showTitle, setShowTitle] = useState(false);
  const [laneName, setLaneName] = useState(lane.name);

  const updateLaneAndClose = () => {
    if (laneName) {
      changeName();
      setShowTitle(false);
    }
  };

  const changeName = () => {
    setLanes((prev) => {
      return prev.map((ln) =>
        ln.id === lane.id ? { ...ln, name: laneName } : ln
      );
    });
  };

  const handleBlur = () => updateLaneAndClose();

  const handleInputClick = (e: KeyboardEvent<HTMLElement>) => e.key === 'Enter' && updateLaneAndClose();

  const handleTextClick = () => setShowTitle(true);

  const laneTitleInputClass = useMemo(() => "lane-title-input" + (laneName ? "" : " error"), [laneName])


  return (
    showTitle ?
      <input
        type="text"
        value={laneName}
        autoFocus
        onChange={(e) => setLaneName(e.target.value)}
        onKeyDown={handleInputClick}
        onBlur={handleBlur}
        className={laneTitleInputClass}
      />
      :
      <h6 onClick={handleTextClick} className="lane-title">
        {lane.name}
        <i className="fas fa-pencil-alt"></i>
      </h6>
  );
};
export default LaneTitle;
