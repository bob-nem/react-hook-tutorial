import { useState, useEffect } from "react";
import axios from "axios";

function useEffectTutorial() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email)
            console.log("API WAS CALLED")
            console.log(response.data)
        })
    }, [count])
    return (
        <div>
            Script 137
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >push the button</button>
        </div>
    )
}

export default useEffectTutorial