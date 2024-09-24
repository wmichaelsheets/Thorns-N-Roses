import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { NurseryList } from "../Components/Nursery/NurseryList"

export const AppViews = () => {
    return(
        <Routes>
    <Route path="/" element={ <>
        <NavBar/>
        <Outlet />
    </> }>
        <Route path="/nurseries" element={ <NurseryList /> } />
        <Route path="/distributors" element={ <></> } />
        <Route path="/retailers" element={ <></> } />
    </Route>
</Routes>
    )
}