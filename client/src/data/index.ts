import { HTMLInputTypeAttribute } from "react";
import { v4 as uuidv4 } from 'uuid';

export interface ILane {
    id: string,
    name: string,
    tasks: Array<ITask>
}

export interface ITask {
    id: string,
    label_id: string,
    name: string,
    description: string,
    due_date: string,
    priority: number,
}

export interface IField {
    id: string,
    type: HTMLInputTypeAttribute,
    is_required: boolean,
    name: string,
    options: Array<Object>,
}

export interface IPriority {
    name: string,
    value: number,
    color: string,
}

export interface ILabel {
    id: string,
    key: string,
    name: string,
    bg_color: string,
    color: string,
}


/* 
Workspaces
  Users
  Labels
  Lanes
    Tasks
  Fields
*/

export interface IWorkspace {
    id: string,
    name: string,
    lanes: Array<ILane>,
    labels: Array<ILabel>
    fields: Array<IField>
}


export const priorityList: IPriority[] = [
    {
        name: 'High',
        value: 3,
        color: '#e01c13'
    },
    {
        name: 'Medium',
        value: 2,
        color: '#f6b32d'
    },
    {
        name: 'Low',
        value: 1,
        color: '#abcd38'
    }
]


const workspaceList = [
    {
        id: "1",
        name: "Demo Workspace",
    },
    {
        id: "2",
        name: "Demo Workspace 2",
    },
    {
        id: "3",
        name: "Demo Workspace 3",
    }
]



const labelData = [
    {
        id: "1",
        key: "B",
        name: "Bug",
        bg_color: "#E53935",
        color: "#ffffff",
    },
    {
        id: "2",
        key: "S",
        name: "Story",
        bg_color: "#7CB342",
        color: "#ffffff",
    },
    {
        id: "3",
        key: "T",
        name: "Task",
        bg_color: "#1E88E5",
        color: "#ffffff",
    },
]


const laneData = [
    {
        id: "1",
        name: 'Backlog',
        tasks: [
            {
                id: uuidv4(),
                label_id: "1",
                name: 'Misspelling on navbar',
                description: 'This is a demo description',
                due_date: '2021-02-12',
                priority: 3,
            }
        ]
    },
    {
        id: "2",
        name: 'Open',
        tasks: [
            {
                id: uuidv4(),
                label_id: "2",
                name: 'Add hidden button in Mobile view',
                description: 'This is a demo description',
                due_date: '2021-02-12',
                priority: 1,
            },
            {
                id: uuidv4(),
                label_id: "3",
                name: 'Design Prototype for Blog Page',
                description: 'This is a demo description',
                due_date: '2021-02-12',
                priority: 2,
            },
            {
                id: uuidv4(),
                label_id: "4",
                name: 'Update Header',
                description: 'Distribute header into multiple components',
                due_date: '2022-04-05',
                priority: 1,
            }
        ]
    },
    {
        id: "3",
        name: 'In Progress',
        tasks: [
            {
                id: uuidv4(),
                label_id: "3",
                name: 'Component Redesign',
                description: 'Distribute header into multiple components',
                due_date: '2021-02-12',
                priority: 2,
            }
        ]
    },
    {
        id: "4",
        name: 'Done',
        tasks: [
            {
                id: uuidv4(),
                label_id: "2",
                name: 'Change Task Form Format',
                description: 'this is a demo description',
                due_date: '2021-02-12',
                priority: 2,
            },
        ]
    }
];



const workspaceData = {
    id: "1",
    name: "Demo Workspace",
    lanes: laneData,
    labels: labelData,
}





