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
    priority: number
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

