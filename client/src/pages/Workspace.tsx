import { useState, useEffect } from 'react';
import Header from 'layout/header/Header';
import LaneList from 'layout/lane-list';
import { ILane } from 'data';
import { useData } from 'hooks/useData';
import Submenu from 'layout/sub-menu';

const compareTexts = (a: string, b: string) => {
  return a.toLowerCase().includes(b.toLocaleLowerCase());
}

const Workspace = () => {

  const [searchValue, setSearchValue] = useState<string>('');
  const { selectedLabel, updateLabelList, updateFieldList } = useData();
  const [lanes, setLanes] = useState<ILane[]>([]);
  const [filteredLanes, setFilteredLanes] = useState<ILane[]>(lanes);


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/workspace/');
        const data = await res.json();
        console.log(data);
        updateLabelList(data?.labels);
        updateFieldList(data?.fields);
        setLanes(data?.lanes);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [])

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

export default Workspace;