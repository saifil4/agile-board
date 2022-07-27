export const laneData = [
    {
        id: 1,
        lanename: 'Backlog',
        tasks: [
            {
                id: Math.random() * 1000,
                labelid: 1,
                taskname: 'Misspelling on Navbar',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 3,
                laneid: 1
            }
        ]
    },
    {
        id: 2,
        lanename: 'Open',
        tasks: [
            {
                id: Math.random() * 1000,
                labelid: 2,
                taskname: 'Add Task button hidden in Mobile view',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 1,
                laneid: 2
            },
            {
                id: Math.random() * 1000,
                labelid: 3,
                taskname: 'Design Prototype for Blog Page',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 2,
                laneid: 2,
                order: 1
            },
            {
                id: Math.random() * 1000,
                labelid: 3,
                taskname: 'Update Header',
                description: 'Distribute header into multiple components',
                duedate: '2021-02-12',
                priority: 1,
                laneid: 2
            }
        ]
    },
    {
        id: 3,
        lanename: 'In Progress',
        tasks: [
            {
                id: Math.random() * 1000,
                labelid: 3,
                taskname: 'Component Redesign',
                description: 'Distribute header into multiple components',
                duedate: '2021-02-12',
                priority: 2,
                laneid: 3
            }
        ]
    },
    {
        id: 4,
        lanename: 'Done',
        tasks: [
            {
                id: Math.random() * 1000,
                labelid: 2,
                taskname: 'Change Task Form Format',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: 2,
                laneid: 4
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