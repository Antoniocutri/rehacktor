import { Outlet } from "react-router";
import Navbar from "../LayoutComponet/Navbar";
import Footer from "../LayoutComponet/Footer";

export default function Layout() {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}