import React, { useState, useContext } from "react";
import { LabelData } from "./data";

const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [labelList, setLabelList] = useState(LabelData);
  const [selectedLabel, setSelectedLabel] = useState(0);
  const value = { labelList, selectedLabel, setSelectedLabel, setLabelList };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
