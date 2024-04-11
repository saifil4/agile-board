import { useState, useContext, ReactNode, createContext } from "react";
import { ILabel, labelData } from "data";

interface IDataProvider {
  labelList: ILabel[],
  selectedLabel: string,
  updateSelectedLabel: (label: string) => void,
  updateLabelList: (list: Array<ILabel>) => void,
  addToLabelList: (label: ILabel) => void,
}

const DataContext = createContext<IDataProvider>({
  labelList: [],
  selectedLabel: "0",
  updateLabelList: function (list: Array<ILabel>): void {
    throw new Error("Function not implemented.");
  },
  updateSelectedLabel: function (label: string): void {
    throw new Error("Function not implemented.");
  },
  addToLabelList: function (label: ILabel): void {
    throw new Error("Function not implemented.");
  },
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [labelList, setLabelList] = useState<ILabel[]>(labelData);
  const [selectedLabel, setSelectedLabel] = useState<string>("0");

  const updateSelectedLabel = (label: string) => {
    setSelectedLabel(label);
  }

  const updateLabelList = (list: Array<ILabel>) => {
    setLabelList(list);
  }

  const addToLabelList = (label: ILabel) => {
    setLabelList((prev) => {
      return [...prev, label];
    });
  }

  const value: IDataProvider = {
    labelList,
    selectedLabel,
    updateSelectedLabel,
    updateLabelList,
    addToLabelList,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
