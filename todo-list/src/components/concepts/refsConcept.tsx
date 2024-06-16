import React, { useRef } from "react";

export const Refs: React.FC = () => {
    const ref = useRef(0)

    return (
        <div>
            <span>{`O valor da ref é: ${ref.current}`}</span>
        </div>
    )
}