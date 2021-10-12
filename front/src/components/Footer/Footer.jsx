import React from "react";
import style from './Footer.module.css';



const Footer = () => {
    return (
        <footer>
            {/* <nav>
                <a href="#">Главная</a>
                <a href="#">Теория</a>
                <a href="#">Тесты</a>
                <a href="#">Настройки</a>
                <a href="#">Контакты</a>
                <a href="#">Офис</a>
            </nav> */}
        <div className={style.logo}>
            <a href="#">
                <img className={style.imgLogo} src="/images/logo1.png" alt="" />
            </a>
        </div>
        <div className={style.social}>
            <a href="#" target="_blank"><img className={style.footerIcon} src="/images/png/vk.png" alt="" /></a>
            <a href="#" target="_blank"><img className={style.footerIcon} src="/images/png/telegram.png" alt="" /></a>
            <a href="https://www.youtube.com/channel/UC5gufuYHPSsJA-jul-iwyXA" target="_blank"><img className={style.footerIcon} src="/images/png/youtube.png" alt="" /></a>
            <a href="#" target="_blank"><img className={style.footerIcon} src="/images/png/whatsapp.png" alt="" /></a>
            <a href="callto:duhar.ya"><img className={style.footerIcon} src="/images/png/skype.png" alt="" /></a>
            <a href="#" target="_blank"><img className={style.footerIcon} src="/images/png/github.png" alt="" /></a>
        </div>
        <p>Пробная работа для себя</p>
    </footer>
    )
}

export default Footer;