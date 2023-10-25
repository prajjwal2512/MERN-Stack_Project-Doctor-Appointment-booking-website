
import React from 'react';

import Header from "../components/Header/Header";
// import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
    return <>
    <Header/>
    <main>
        <Routers/>
    </main>
    {/* <About /> */}
    <Footer/>
    </>;
};

export default Layout;