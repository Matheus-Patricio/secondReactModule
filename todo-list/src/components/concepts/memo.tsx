import { useState } from "react"

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[]
    }
    }



export const Memoization:React.FC<MemoizationProps> = ({financialData}) => {
    //estado que define se os valores devem ser mostrados ou nao!   
    const [showValues, setShowValues] = useState(true)



    const totalIncomes = financialData.incomes.reduce((total, incomes) => {
        return total += incomes
    }, 0)


    const totalOutcomes = financialData.outcomes.reduce((total, outcomes) => {
        return total = total + outcomes
    },0)


    return (
        <div>
            <h1>
                Componente de memorização
            </h1>

            <p>{`total de receitas: ${showValues ? totalIncomes : "XXXXX"}`} </p>
            <br />
            <p>{`total de Despesas: ${showValues? totalOutcomes : "XXXXX"}`}</p>
            <br />
            <button onClick={() => {
                setShowValues(!showValues)
            }}>{showValues? "Ocultar valores" : 'Mostrar valores'}</button>
        </div>
    )
}