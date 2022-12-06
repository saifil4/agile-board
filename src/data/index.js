import { v4 as uuidv4 } from 'uuid';

export const laneData = [
    {
        id: 1,
        lanename: 'Backlog',
        tasks: [
            {
                id: uuidv4(),
                labelid: 1,
                taskname: 'Misspelling on Navbar',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 3,
            }
        ]
    },
    {
        id: 2,
        lanename: 'Open',
        tasks: [
            {
                id: uuidv4(),
                labelid: 2,
                taskname: 'Add Task button hidden in Mobile view',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 1,
            },
            {
                id: uuidv4(),
                labelid: 3,
                taskname: 'Design Prototype for Blog Page',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 2,
            },
            {
                id: uuidv4(),
                labelid: 3,
                taskname: 'Update Header',
                description: 'Distribute header into multiple components',
                duedate: '2021-02-12',
                priority: 1,
            }
        ]
    },
    {
        id: 3,
        lanename: 'In Progress',
        tasks: [
            {
                id: uuidv4(),
                labelid: 3,
                taskname: 'Component Redesign',
                description: 'Distribute header into multiple components',
                duedate: '2021-02-12',
                priority: 2,
            }
        ]
    },
    {
        id: 4,
        lanename: 'Done',
        tasks: [
            {
                id: uuidv4(),
                labelid: 2,
                taskname: 'Change Task Form Format',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 2,
            },
        ]
    }
];

export const priorityList = [
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

export const LabelData = [
    {
      id: 1,
      key: "B",
      name: "Bug",
      bgcolor: "#E53935",
      color: "#ffffff",
    },
    {
      id: 2,
      key: "S",
      name: "Story",
      bgcolor: "#7CB342",
      color: "#ffffff",
    },
    {
      id: 3,
      key: "T",
      name: "Task",
      bgcolor: "#1E88E5",
      color: "#ffffff",
    },
  ]