import { Outlet, useLoaderData } from "react-router";
import Navbar from "../LayoutComponet/Navbar";
import Footer from "../LayoutComponet/Footer";
import Sidebar from "../LayoutComponet/Sidebar";

export default function Layout() {
    const genres = useLoaderData()

    return(
        <>
            <Navbar/>

            <section className="grid grid-cols-7 gap-4">
                <div>
                    <Sidebar genres={genres}/>
                </div>
                <div className="col-span-6">
                    <Outlet />
                </div>
            </section>

            <Footer/>
        </>
    )
}