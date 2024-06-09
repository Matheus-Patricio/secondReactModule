import { StatsCard } from "../statsCard/statsCard"
import headerStyles from "./header.module.scss"


export const Header: React.FC = () => {
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.container}>
                <div>   
                    <h1>My todo</h1>
                    <span>Bem vindo, usuário!</span>
                </div>    

                <div>
                    <StatsCard title="Total tarefas" value={5} />
                    <StatsCard title="Tarefas pendentes" value={12}  />
                    <StatsCard title="Tarefas concluidas" value={2}  />
                </div>
            </div>
        </header>
    )
}