import React, { useState } from "react";
import style from './Сontacts.module.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";


// const mapData = {
//         center: [47.286139, 39.714573],
//         zoom: 15,
//       };
      
//  const coordinates = [
//         [47.286139, 39.714573],
//         [47.286940, 39.716199]
//       ];

const Contacts = (props) => {


    
    const [contactMessage, setContactMessage] = useState({
        name: '',
        email: '',
        message: '',
    })

    const sendForm = () => {
        alert('Ваше сообщение отправлено!')
    }
    
    const onInputChange = (v) => {
        setContactMessage({ ...contactMessage, [v.target.name]: v.target.value });
    }

    return(
        <main className={style.mainContacts}>
            <h2 className={style.title}>Обратная связь</h2>
            <form className={style.form} onSubmit={sendForm}>
                <p>
                    <input required type="text" name="name" placeholder="Имя" onChange={onInputChange} className={style.feedbackInput} />
                </p>
                <p>
                    <input required type="email" name="email" placeholder="Email" onChange={onInputChange} className={style.feedbackInput} />
                </p>
                <p>
                    <textarea required name="message" className={style.feedbackInput} placeholder="Ваше сообщение" onChange={onInputChange}  />
                </p>
                <input type="submit" value="Отправить" className={style.buttonSubmit} />
                <div className="ease"></div>
            </form>
            <h2 className={style.title}>Мы на карте:</h2>
            <YMaps className={style.mapContainer}>
                <Map className={style.map} defaultState={props.mapData}>
                {props.coordinates.map((coordinate, idx) => <Placemark key={idx} geometry={coordinate} />)}
                </Map>
            </YMaps>
        </main>
    )
}

export default Contacts;