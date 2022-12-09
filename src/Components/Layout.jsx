import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ContextGlobal } from "./utils/globalContext";


const Layout = () => {
    const { state } = useContext(ContextGlobal)
    return (
        <>
            <Navbar />
            <main className={state.bgFlag}><Outlet /></main>
            <Footer />
        </>
    )
}

export default Layout