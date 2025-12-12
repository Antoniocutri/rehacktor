import { createBrowserRouter } from "react-router";
import routes from "./routes"
import Layout from "../components/layouts/Layout"
import Homepage from "../views/Homepage"
import { getAllGamesLoader, getAllGenres, getFilterdByGenres, getSearchedGames } from "./loader";
import SearcPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";
import RegisterPage from "../views/auth/RegisterPage";
import LoginPage from "../views/auth/LoginPage";
import AuthLayout from "../components/layouts/AuthLayout";


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
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children:[
            {
                path: routes.register,
                Component: RegisterPage,
            },
            {
                path: routes.login,
                Component: LoginPage,
            }
        ]
    }
])

export default router;