import React from "react";
import "./header.css"

function Header(){
    return(
        <>
        <div className="header">
          <div className="logo"><p>Logo</p></div>
          <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
          </div>
        </div>
        </>
    );
}

export default Header;