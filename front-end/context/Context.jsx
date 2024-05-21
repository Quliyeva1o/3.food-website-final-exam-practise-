import { getAll } from "../API/requests";

import { createContext, useState, useEffect } from 'react';

export const myContext = createContext("")
export const myBasket = createContext("")

const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const localBasket = JSON.parse(localStorage.getItem("basket"))
    const [basket, setBasket] = useState(localBasket ? localBasket : [])
    useEffect(() => {
        getAll().then((res) => {
            setItems(res.data)
        })
    }, [])
    return (
        <>
            <myBasket.Provider value={{ basket, setBasket }}>
                <myContext.Provider value={{ items, setItems }}>
                    {children}
                </myContext.Provider>
            </myBasket.Provider>
        </>
    )
}

export default ContextProvider