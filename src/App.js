import "./App.css";
import {Navbar} from './components/Navbar'
import { useState } from "react";
import { CountriesList } from "./components/CountriesList";


function App() {

  const [Pais, setPais] = useState();

  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>
    </div>
  )
}
export default App;