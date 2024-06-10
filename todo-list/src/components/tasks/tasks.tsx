import tasksStyle from './task.module.scss'
import React, {FormEvent, useState} from 'react'

interface Task {
    title: string
    done: boolean
    id: number
}

export const Tasks: React.FC = () => {
    const [taskTitle, setsTaskTitle] = useState('')
    const [tasks, setTasks] = useState([] as Task[])

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

    if (taskTitle.length < 3) {
        alert('Invalido, titulo menor que 3 caracteres!')
        }
        
        
        setTasks([
            ...tasks, //pega todas as tarefas ja existentes e coloca esse novo valor do estado de tarefas
            { id: 1, title:taskTitle, done: false }
        ])
    }

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
                <button type='submit' >Enviar</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return(
                        <li>
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor={`task-${task.id}`}>{task.title}</label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}