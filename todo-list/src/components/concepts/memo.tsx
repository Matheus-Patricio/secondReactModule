import { useCallback, useMemo, useState } from "react"

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[]
    }
    }



export const Memoization:React.FC<MemoizationProps> = ({financialData}) => {
    //estado que define se os valores devem ser mostrados ou nao!   
    const [showValues, setShowValues] = useState(true)


    //useMemo : Usada para memorizar(cachear) o valor de uma função/expressão.
    const totalIncomes = useMemo(() => {
        return financialData.incomes.reduce((total, incomes) => {
            return total = total + incomes
        },0)
    }, [financialData.incomes])


    const totalOutcomes = useMemo(() => {
        return financialData.outcomes.reduce((total, outcomes) => {
            return total = total + outcomes
        },0)
    }, [financialData.outcomes])


    //useCallback : retorna a definição de uma função/expressão, apenas re-declarada quando necessário.
    const call = useCallback(
      (desconto:number) => {
        return totalOutcomes + (1 * desconto)
      },
      [totalIncomes],
    )
    

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