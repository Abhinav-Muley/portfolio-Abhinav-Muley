import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Project from "./pages/Project";
import Casestudy from "./pages/Casestudy";

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="/" index element={<Home />} />
                    <Route path="/Project" element={<Project />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Casestudy/:id" element={<Casestudy/>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;