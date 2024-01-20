import React from 'react';
import  "./index.css";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Aboutsec from './Components/About';
import Menu from './Components/Menu';
import Blog from './Components/Blog';
import ContactUs from './Components/Contact';


function App() {
  return (
    <>
     <div className=" bg-[url('./assets/MAINBG.png')]">
      <Navbar/>
      <Header/>       
     </div>
     <Aboutsec/>
     <Menu/>
     <Blog/>
     <ContactUs/>
    </>
  );
}



export default App
