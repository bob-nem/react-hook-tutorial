import axios from "axios"
import { useState, useCallback } from "react"
import Child from "./useCallbackChild"

const useCallBackTutorial = () => {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Privet, you need to subscribe to the channel")

    const returnComment = useCallback(
        (name) => {
            return data + name
        },
        [data]
    )

    return (
        <div>
            <Child returnComment = {returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1>flickering text</h1>}
        </div>
    )
}

export default useCallBackTutorial