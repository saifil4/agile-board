import { useState, useContext, ReactNode, createContext, Dispatch, SetStateAction } from "react";
import { labelData, ILabel } from "data";


interface IDataProvider {
  labelList: ILabel[],
  setLabelList: Dispatch<React.SetStateAction<ILabel[]>>,
  selectedLabel: string,
  setSelectedLabel: Dispatch<React.SetStateAction<string>>
}

const DataContext = createContext<IDataProvider>({
  labelList: [],
  selectedLabel: "0",
  setLabelList: function (value: SetStateAction<ILabel[]>): void {
    throw new Error("Function not implemented.");
  },
  setSelectedLabel: function (value: SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  }
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [labelList, setLabelList] = useState<ILabel[]>(labelData);
  const [selectedLabel, setSelectedLabel] = useState<string>("0");
  const value = { labelList, selectedLabel, setSelectedLabel, setLabelList };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
