import { useLayoutEffect, useEffect, useRef } from "react";

const useLayoutEffectTutorial = () => {
    const inputRef = useRef(null);  
    useEffect(() => {
        inputRef.current.value = "HELLO"
    }, [])

    useLayoutEffect (() => {
        console.log(inputRef.current.value);
    }, [])

    return (
        <div className="App">
            <input ref={inputRef} value="Volfgang" style={{width: 400, height: 200}} />
        </div>
    )
}

export default useLayoutEffectTutorial