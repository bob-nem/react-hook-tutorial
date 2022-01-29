import axios from "axios"
import { useState, useEffect, useMemo } from "react"

const useMemoTutorial = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data)
            })
    }, [])
    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = ""
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name
            if (currentName.length > longestName.length) {
                longestName = currentName
            }
        }
        console.log("this was computed");
        return longestName
    }

    const getLongestName = useMemo(() => findLongestName(data), [toggle])
    
    return (
        <div>
            <div>{getLongestName}</div>

            <button
                onClick={()=>{
                    setToggle(!toggle)
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <p>flickering text</p>}
        </div>
    )
}

export default useMemoTutorial