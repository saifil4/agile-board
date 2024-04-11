import { useState, useContext, ReactNode, createContext } from "react";
import { ILabel, IField } from "data";


interface IDataProvider {
  labelList: ILabel[],
  fieldList: Array<IField>,
  selectedLabel: string,
  updateSelectedLabel: (label: string) => void,
  updateLabelList: (list: Array<ILabel>) => void,
  updateFieldList: (list: Array<IField>) => void,
  addToLabelList: (label: ILabel) => void,
}

const DataContext = createContext<IDataProvider>({
  labelList: [],
  fieldList: [],
  selectedLabel: "0",
  updateLabelList: function (list: Array<ILabel>): void {
    throw new Error("Function not implemented.");
  },
  updateFieldList: function (list: Array<IField>): void {
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
  const [labelList, setLabelList] = useState<ILabel[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string>("0");
  const [fieldList, setFieldList] = useState<Array<IField>>([]);

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

  const updateFieldList = (list: Array<IField>) => {
    setFieldList(list);
  }


  const value: IDataProvider = {
    labelList,
    fieldList,
    selectedLabel,
    updateSelectedLabel,
    updateLabelList,
    addToLabelList,
    updateFieldList
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
