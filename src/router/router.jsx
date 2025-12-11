import { createBrowserRouter } from "react-router";
import routes from "./routes"
import Layout from "../components/layouts/Layout"
import Homepage from "../views/Homepage"
import { getAllGamesLoader, getAllGenres, getFilterdByGenres, getSearchedGames } from "./loader";
import SearcPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";


const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
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
            {
                path: routes.genres,
                Component: GenrePage,
                loader: getFilterdByGenres
            },
        ]
    }
])

export default router;