import {forwardRef, useImperativeHandle, useState} from "react"

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)
    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))
    return (
        <>
            <button>
                Button from child
            </button>
            <div>{toggle && <span>Toggle</span>}</div>
        </>
    )
})

export default Button