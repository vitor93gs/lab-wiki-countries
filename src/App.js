import "./App.css";
import {Navbar} from './components/Navbar'
import { useState } from "react";
import { CountriesList } from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";
import { Routes, Route, } from "react-router-dom";


function App() {

  const [index, setPais] = useState(0);

  

  return (
    <div className="App">
      <Navbar/>
      <div className="divzona">
      <CountriesList set={setPais}/>
      <Routes>
        <Route path="/:alpha3Code"  element={<CountryDetails index={index}/>} />      
      </Routes>
      </div>
    </div>
    
  )
}
export default App;

// PROBLEMA COM STATE E RENDER******************