import React from 'react';
import './App.css'
import NavBar from "./Components/Navbar/NavBar"
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import {NETFLIX_ORIGINALS, ACTION, COMEDY} from './Constants/urls'

function App() {

  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost title='Netflix Originals' url={NETFLIX_ORIGINALS}/>
      <Rowpost title='Actions' isSmall url={ACTION}/>
      <Rowpost title='Comedy' isSmall url={COMEDY}/>
    </div>
  );
}

export default App;
