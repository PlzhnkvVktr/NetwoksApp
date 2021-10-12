import React from "react";
import './Navbar.css';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';




const Navbar = () => {

    
    
    
    let myFunction = () => {
        let x = document.getElementById("myTopNav");
        
        if(x.className === "topNav"){
            x.className += " responsive";
        } else{
            x.className = "topNav";
        }
    }


    return (
        <nav>
            <div className="topNav" id="myTopNav">
                <NavLink to="/main">Главная</NavLink>
                <NavLink to="/content">Теория</NavLink>
                <NavLink to="/test">Тест</NavLink>
                <NavLink to="/settings">Настройки</NavLink>
                <NavLink to="/contact">Контакты</NavLink>
                <NavLink to="/news">Новости</NavLink>
                <a href="#" onClick={myFunction} className="icon">&#9776;</a>
            </div>
        </nav>
    )
}

export default Navbar;