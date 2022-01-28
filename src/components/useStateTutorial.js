import { useState } from "react";

const useStateTutorial = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment}>Plus one</button>
        </div>
    )
}

export default useStateTutorial