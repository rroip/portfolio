import React from "react";
function Navigation({ setCurrentPage }){
    
    return (
        <nav className="d-flex justify-content-evenly">
            <a href="" onClick={(event) => {
                event.preventDefault();
                setCurrentPage("about");
            }}>About</a>{" "}
            <a href="" onClick={(event) => {
                event.preventDefault();
                setCurrentPage("portfolio");
            }}>Portfolio</a>{" "}
            <a href="" onClick={(event) => {
                event.preventDefault();
                setCurrentPage("contact");
            }}>Contact</a>{" "}
            <a href="">Resume</a>
        </nav>
    )
}

export default Navigation;