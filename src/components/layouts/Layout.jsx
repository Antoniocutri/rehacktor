import { Outlet, useLoaderData } from "react-router";
import Navbar from "../LayoutComponet/Navbar";
import Footer from "../LayoutComponet/Footer";
import Sidebar from "../LayoutComponet/Sidebar";
import { useState } from "react";

export default function Layout() {
    const genres = useLoaderData()

    return(
        <>
            <Navbar/>

            <section className="grid grid-cols-7 gap-4">
                <div className="col-span-5 md:col-span-1">
                    <Sidebar genres={genres} />
                </div>
                <div className="col-span-7 md:col-span-6">
                    <Outlet />
                </div>
            </section>

            <Footer/>
        </>
    )
}