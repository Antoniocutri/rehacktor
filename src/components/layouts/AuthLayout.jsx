import { Outlet } from "react-router-dom";
import Footer from "../LayoutComponet/Footer";
import Navbar from "../LayoutComponet/Navbar";

export default function AuthLayout() {
    
    return(
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    )
}