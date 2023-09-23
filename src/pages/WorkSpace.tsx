import { useState, useEffect } from 'react';
import Header from 'layout/header/Header';
import LaneList from 'layout/lane-list';
import { laneData, ILane } from 'data';
import { useData } from 'hooks/useData';

const Workspace = () => {

  const [searchValue, setSearchValue] = useState<string>('');
  const { selectedLabel } = useData();
  const [lanes, setLanes] = useState<ILane[]>(laneData);
  const [filteredLanes, setFilteredLanes] = useState<ILane[]>(lanes);

  useEffect(() => {
    const filterHandler = () => {
      var filtered = lanes;
      if (selectedLabel === "0") {
        filtered = lanes.map(lane => {
          return { ...lane, tasks: lane.tasks.filter(task => task.name.includes(searchValue)) }
        });
      } else {
        filtered = lanes.map(lane => {
          return { ...lane, tasks: lane.tasks.filter(task => task.label_id === selectedLabel && task.name.includes(searchValue)) }
        })
      }
      setFilteredLanes(filtered)
    }
    filterHandler();
  }, [selectedLabel, lanes, searchValue]);

  const handleSearch = (searchParam: string) => {
    setSearchValue(searchParam)
  }

  return (
    <main className="wrapper">
      <Header handleSearch={handleSearch} />
      <LaneList filteredLanes={filteredLanes} setFilteredLanes={setFilteredLanes} setLanes={setLanes} />
    </main>
  );
}

export default Workspace;