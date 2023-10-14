const express = require('express');
const uuidv4 = require('uuid').v4;

const router = express.Router();


router.get('/lane', (req, res) => {
    res.json(laneData);
});

router.get('/label', (req, res) => {
    res.json(labelData);
});


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


module.exports = router;


