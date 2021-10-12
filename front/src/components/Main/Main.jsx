import React from "react";
import style from './Main.module.css';

const Main = () => {
    return (
        <main className={style.mainMain}>
            <p class={style.fig}><img src="/images/networkpic.jpg" alt="" class={style.mw100} /></p>
            <h1 className={style.title}>На данном сайте вы получите следущие знания:</h1>
            <div class={style.advantages_container}>

                <div class={style.advantages}>
                    <div class={style.advantages_item}>
                        <img src="/images/iso.jpg" alt="" />
                        <h3 className={style.advantages_title}>Модель OSI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor esse ex laborum natus vitae!</p>
                    </div>
                    <div class={style.advantages_item}>
                        <img src="/images/iso.jpg" alt="" />
                        <h3 className={style.advantages_title}>Модель TCP/IP</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor esse ex laborum natus vitae!</p>
                    </div>
                    <div class={style.advantages_item}>
                        <img src="/images/iso.jpg" alt="" />
                        <h3 className={style.advantages_title}>Протоколы</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor esse ex laborum natus vitae!</p>
                    </div>
                    <div class={style.advantages_item}>
                        <img src="/images/iso.jpg" alt="" />
                        <h3 className={style.advantages_title}>Защита информации</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor esse ex laborum natus vitae!</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;