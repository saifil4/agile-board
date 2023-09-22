import { useState, useContext, ReactNode, createContext, Dispatch, SetStateAction } from "react";
import { labelData, ILabel } from "data";


interface IDataProvider {
  labelList: ILabel[],
  setLabelList: Dispatch<React.SetStateAction<ILabel[]>>,
  selectedLabel: number,
  setSelectedLabel: Dispatch<React.SetStateAction<number>>
}

const DataContext = createContext<IDataProvider>({
  labelList: [],
  selectedLabel: 0,
  setLabelList: function (value: SetStateAction<ILabel[]>): void {
    throw new Error("Function not implemented.");
  },
  setSelectedLabel: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  }
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [labelList, setLabelList] = useState<ILabel[]>(labelData);
  const [selectedLabel, setSelectedLabel] = useState<number>(0);
  const value = { labelList, selectedLabel, setSelectedLabel, setLabelList };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
