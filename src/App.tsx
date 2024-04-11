import { useState, useEffect } from 'react';
import Header from 'layout/header/Header';
import LaneList from 'layout/lane-list';
import { ILane } from 'data';
import { useData } from 'hooks/useData';
import Submenu from 'layout/sub-menu';

import { laneData } from 'data';

const compareTexts = (a: string, b: string): boolean => {
  return a.toLowerCase().includes(b.toLocaleLowerCase());
}

const App = () => {

  const [searchValue, setSearchValue] = useState<string>('');
  const { selectedLabel } = useData();
  const [lanes, setLanes] = useState<ILane[]>(laneData);
  const [filteredLanes, setFilteredLanes] = useState<ILane[]>(lanes);


  useEffect(() => {
    const filterHandler = () => {
      const filtered = lanes.map(lane => {
        const tasks = selectedLabel === "0" ?
          lane.tasks.filter(task => compareTexts(task.name, searchValue)) :
          lane.tasks.filter(task => task.label_id === selectedLabel && compareTexts(task.name, searchValue))
        return { ...lane, tasks: tasks }
      });
      setFilteredLanes(filtered)
    }
    filterHandler();
  }, [selectedLabel, lanes, searchValue]);

  const handleSearch = (searchParam: string) => setSearchValue(searchParam)

  return (
    <main className="wrapper">
      <Header />
      <Submenu handleSearch={handleSearch} />
      <LaneList filteredLanes={filteredLanes} setFilteredLanes={setFilteredLanes} setLanes={setLanes} />
    </main>
  );
}

export default App;