import { useContext } from "react"
import { StatsCard } from "../statsCard/statsCard"
import headerStyles from "./header.module.scss"
import { TasksContext } from "../context/tasksContext"


export const Header: React.FC = () => {
    const { tasks } = useContext(TasksContext)
    const totalTasks = tasks.length
    const totalPending = tasks.reduce((total, task) => {
        if (!task.done) return total + 1
        return total
    }, 0)

    const totalDone = totalTasks - totalPending
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.container}>
                <div>   
                    <h1>My todo</h1>
                    <span>Bem vindo, usuário!</span>
                </div>    

                <div>
                    <StatsCard title="Total tarefas" value={totalTasks} />
                    <StatsCard title="Tarefas pendentes" value={totalPending}  />
                    <StatsCard title="Tarefas concluidas" value={totalDone}  />
                </div>
            </div>
        </header>
    )
}