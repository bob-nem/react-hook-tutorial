import { useState } from "react";

const useStateTutorial = () => {
    const [inputValue, setInputValue] = useState("137")

    let onChange = (event) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    return (
        <div>
            <input placeholder="write here..." onChange={onChange} />
            <div>{inputValue}</div>             
        </div>
    )
}

export default useStateTutorial