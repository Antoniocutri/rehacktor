import { Outlet, useLoaderData } from "react-router";
import Navbar from "../LayoutComponet/Navbar";
import Footer from "../LayoutComponet/Footer";
import Sidebar from "../LayoutComponet/Sidebar";
import { useState } from "react";

export default function Layout() {
    const genres = useLoaderData()
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () =>{
        if (sidebarOpen) {
            setSidebarOpen(false)
        }else{
            setSidebarOpen(true)
        }
    }
    return(
        <>
            <Navbar onOpenSidebar={openSidebar}/>

            <section className="grid grid-cols-7 gap-4">
                <div>
                    <Sidebar genres={genres} isOpen={sidebarOpen}/>
                </div>
                <div className="col-span-6">
                    <Outlet />
                </div>
            </section>

            <Footer/>
        </>
    )
}