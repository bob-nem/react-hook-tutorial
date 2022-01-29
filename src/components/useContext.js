import { useState, createContext } from "react"
import Login from "./useContextLogin"
import User from "./useContextUser"

export const AppContext = createContext(null)

const useContextTutorial = () => {
    const [username, setUsername] = useState("")
    return (
        <AppContext.Provider value={{username, setUsername}}>
            <Login />
            <User />
        </AppContext.Provider>
    )
}

export default useContextTutorial