import { useEffect } from "react"

const Child = ({ returnComment }) => {
    useEffect(() => {
        console.log("function was called");
    }, [returnComment])
    return (
        <div>{returnComment("Volfgang")}</div>
    )
}

export default Child