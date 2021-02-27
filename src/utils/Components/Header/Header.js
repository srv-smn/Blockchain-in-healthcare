import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import './header.css'

const Header = () => {
    return (
        <header>
        <div className="container">    
            <div className="row">
                <div className="header-element"><h3>Heathcare Login</h3></div>
                <div className="search"><input type="text" placeholder='Search'></input></div>    
                <div className="search-icon"><AiOutlineSearch size="20px"/></div>     
            </div>
        </div>
        </header>
    );
};

export default Header;
