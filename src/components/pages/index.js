import React from "react";
import About from "./About"
import Work from "./Work"
import Contact from "./myinfo"
import Resume from "./Resume"
import PageContent from "../PageContent";


function Page({currentPage}){
    const renderPage = () =>{
        switch (currentPage.name) {
            case "About":
                return <About />;
                case "work":
                return <Work />;
                case "contact":
                return <Contact />;
                case "resume":
                return <Resume />;
                default:
                    return <About/>;
        }
    };

    return (
        <section>
            <h2> {(currentPage.name)}</h2>
        <PageContent>{renderPage()}</PageContent>
        </section>
    );
}

export default Page;