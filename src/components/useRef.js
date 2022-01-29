import { useRef } from "react"

const useRefTutorial = () => {
    const inputRef = useRef(null)
    const onClick = () => {
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <h1>Volfgang</h1>
            <input type="text" placeholder="Script..." ref={inputRef} />
            <button onClick={onClick}>Change name</button>
        </div>
    )
}

export default useRefTutorial;