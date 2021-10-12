import React from "react";
import style from './Header.module.css';
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header>
            <div className={style.logo}>
                <a href="#">
                    <img className={style.imgLogo} src={"/images/logo1.png"} alt="Logo" />
                </a>
            </div>
            <Navbar />
        </header>
    )
}

export default Header;