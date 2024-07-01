import { Children, useState, createContext, useEffect } from "react";

export const TasksContext = createContext({} as TaskContentData)

interface TasksProviderProps {
    children: React.ReactNode
}
export interface Task {
    title: string
    done: boolean
    id: number
}

interface TaskContentData {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}

export const TasksProvider: React.FC<TasksProviderProps> = ({
    children
}) => {

    
    const [tasks, setTasks] = useState([] as Task[])
    useEffect(() => {

        const taskOnLocalStorage = localStorage.getItem('tasks')
        if (taskOnLocalStorage) {
            setTasks(JSON.parse(taskOnLocalStorage))
        }
 
    }, [])
    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}