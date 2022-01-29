import {useRef} from "react"
import Button from './useImperativeHandleButton'

const useImperativeHandleTutorial = () => {
    const buttonRef = useRef(null)
    return (
        <div>
            <button onClick={() =>{buttonRef.current.alterToggle()}}>Button form parent</button>
            <div><Button ref={buttonRef} /></div>
        </div>
    )
}

export default useImperativeHandleTutorial