import styles from "./statsCard.module.scss"


interface statsCardsProps {
    title: string
    value: number
}

export const StatsCard: React.FC <statsCardsProps> = ({title, value}) => {
    return (
        <article className={styles.statsCard}>
            <h2>{title}</h2>
            <span>{value}</span>
        </article>
    )
}