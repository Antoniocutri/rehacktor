import { createBrowserRouter } from "react-router";
import routes from "./routes"
import Layout from "../components/layouts/Layout"
import Homepage from "../views/Homepage"
import { getAllGamesLoader, getSearchedGames } from "./loader";
import SearcPage from "../views/SearchPage";


const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children:[
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader
            },
            {
                path: routes.search,
                Component: SearcPage,
                loader: getSearchedGames
            },
        ]
    }
])

export default router;