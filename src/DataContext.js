import React, { useState, useContext } from 'react';

const DataContext = React.createContext();

export const useData = () => {
    return useContext(DataContext);
}

export const DataProvider = ({ children }) => {

    const labelList = [
        {
            'id': 1,
            'key': "B",
            'name': 'Bug',
            'bgcolor': '#E53935',
            'color': '#ffffff'
        },
        {
            'id': 2,
            'key': "S",
            'name': 'Story',
            'bgcolor': '#7CB342',
            'color': '#ffffff'
        },
        {
            'id': 3,
            'key': "T",
            'name': 'Task',
            'bgcolor': '#1E88E5',
            'color': '#ffffff'
        }
    ]

    const [selectedLabel, setSelectedLabel] = useState(0);

    const value = { labelList, selectedLabel, setSelectedLabel };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}