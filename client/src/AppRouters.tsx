
import {Route, Routes} from "react-router-dom";

import SignPage from "./pages/SignPage.tsx";
import RegPage from "./pages/RegPage/RegPage.tsx";
import MovieComponent from "./Components/MovieFiles/MovieComponent.tsx";
import BrowsePage from "./pages/BrowsePage.tsx";
import NextPage from "./pages/RegPage/NextPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import Main from "./pages/Main.tsx";
import MyListPage from "./pages/MyListPage.tsx";

const AppRouters = () => {
    return (

        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<SignPage/>}/>
            <Route path={"/reg"} element={<RegPage/>} />
            <Route path={"/movies/:id"} element={<MovieComponent/>}/>?
            <Route path={"/browse"} element={<BrowsePage/>}/>?
            <Route path={"reg/name"} element={<NextPage/>}/>
            <Route path={"/reg/welcome"} element={<WelcomePage/>}/>
            <Route path = {"/favorites"} element={<MyListPage/>}/>
        </Routes>

    );
};

export default AppRouters;