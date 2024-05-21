import { Outlet } from "react-router-dom"
import Header from "../Layout/Header"

const RouterPagee = () => {
    return (
        <>

            <Header />
            <Outlet />
        </ >
    )
}

export default RouterPagee
