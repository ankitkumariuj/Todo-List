import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';



function App() {

 
  return (
    <>
<Navbar title="TODO LIST" color="Dark"  about="About"/>
<div className="container">
<Textform heading="Enter the Text on Textbox "/>
</div>


    </>
     );
}

export default App;
