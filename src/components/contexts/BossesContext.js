import React, { createContext, useState, useEffect } from 'react'

export const BossesContext = createContext()

const BossesContextProvider = (props) => {
    const [bossesList, setBossesList] = useState(null)

    const fetchData = async () => {
        const res = await fetch('https://api.myjson.com/bins/6y8dh')
        const data = await res.json()
        setBossesList(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <BossesContext.Provider value={{ bossesList }}>
            {props.children}
        </BossesContext.Provider>
    )
}

export default BossesContextProvider;