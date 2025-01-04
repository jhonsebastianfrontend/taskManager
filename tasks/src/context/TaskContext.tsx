import { createContext, ReactNode, useState } from "react";
import { Task } from "../types";
import { Query } from "../helper/Query";
import { Global } from "../helper/Global";

export type TaskContextType = {
    tasks: Task[];
    errorFetch: string;
    getTasks: () => void;
    addTask: (task: Task) => void;
    deleteTask: (id: Task['id']) => void;
    editTask: (id: Task['id'], data: Task) => void;
  }

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

type TaskProviderProps = {
    children: ReactNode
}

export function TaskProvider({ children }: TaskProviderProps){

    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ errorFetch, setErrorFetch ] = useState('')

    const getTasks = async() => {
        const data = await Query(`${Global.url}tasks/get`)
        if(data.status === 'ok'){
            setTasks(data.tasks)
        }else{
            setErrorFetch('An error was found fetching tasks')
        }
    }

    const addTask = async(task: Task) => {
        const data = await Query(`${Global.url}tasks/create`, 'POST', task)
        if(data.status === 'ok'){
            setTasks(data.tasks)
        }else{
            setErrorFetch('An error was found creating task')
        }
    }

    const deleteTask = async (id: Task['id']) => {
        const data = await Query(`${Global.url}tasks/delete/${id}`, 'DELETE')
        if(data.status === 'ok'){
            setTasks(data.tasks)
        }else{
            setErrorFetch('An error was found editing task')
        }
    }

    const editTask = async (id: Task['id'], task: Task) => {
        const data = await Query(`${Global.url}tasks/edit/${id}`, 'PUT', task)
        if(data.status === 'ok'){
            setTasks(data.tasks)
        }else{
            setErrorFetch('An error was found editing task')
        }
    }

    const value = { tasks, errorFetch, getTasks, addTask, deleteTask, editTask };

    return(
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}