import './App.css';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Test from './components/Test/Test';
import Main from './components/Main/Main';
import { Route } from "react-router";
import News from './components/News/News';
import Contacts from './components/Сontacts/Сontacts';
import React, {useState} from 'react';







function App(props) {

  const [mapData, setMapData] = React.useState({
    center: [47.286139, 39.714573],
    zoom: 15});

  

  const [coordinates, setCoordinates] = React.useState([
    [47.286139, 39.714573],
    [47.286940, 39.716199]
  ]);

  return (
    <div className="App">
      <Header />
      <div>
          <Route path='/main' render={ () => <Main />} />
          <Route path='/content' render={ () => <Content />} />
          <Route path='/test' render={ () => <Test />} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/contact' render={ () => <Contacts mapData={mapData} coordinates={coordinates} />} />
          <Route path='/news' render={ () => <News />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
