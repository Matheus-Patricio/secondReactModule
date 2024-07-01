import { TasksContext } from '../context/tasksContext'
import tasksStyle from './task.module.scss'
import React, {FormEvent, useContext, useEffect, useState} from 'react'

export const Tasks: React.FC = () => {
    const [taskTitle, setsTaskTitle] = useState('')

    const {tasks, setTasks} = useContext(TasksContext)
    
    
    const [inputBox, setInputBox] = useState(false)

    const inputHandler = () => {
        setInputBox(!inputBox)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

    if (taskTitle.length < 3) {
        alert('Invalido, titulo menor que 3 caracteres!')
        }
        
        const newTasks = [
            ...tasks, //pega todas as tarefas ja existentes e coloca esse novo valor do estado de tarefas
            { id: new Date().getTime(), title:taskTitle, done: false }

        ]
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        setsTaskTitle('')
    }
    function handleDone(taskID: number) {
        const newTasks = tasks.map((task) => {
            if (taskID === task.id) {
                return{
                    ...task,
                    done:!task.done
                }
            }
            return task
        })
        setTasks(newTasks)
    }

    const handleRemove = (taskID:Number) => {
        const newTasks = tasks.filter(task => task.id !== taskID)
        setTasks(newTasks)
    }
    console.log(tasks)
    return (
        <section className={tasksStyle.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task-title">Adicionar tarefa</label>
                    <input
                    value={taskTitle}
                    onChange={(event) => {setsTaskTitle(event.target.value)}}
                    type="text" 
                    id='task-title'
                    placeholder='Titulo da tarefa'/>
                </div>
                <button type='submit'>Enviar</button>
            </form>

            <ul>
                {tasks.map((task) => {
                    return(
                        <li key={task.id}>
                            <input type="checkbox"
                            id={`task-${task.id}`}
                            onChange={() => handleDone(task.id)} />
                            <label className={task.done ? tasksStyle.done : ""}htmlFor={`task-${task.id}`}>{task.title}</label>
                            <button onClick={() => handleRemove(task.id)}>Remover</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}