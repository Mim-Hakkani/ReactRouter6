import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextValue } from './ContextApi/Context/Context';
import Main from './ContextApi/Main';
import Nav from './Navigation/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallary from './pages/Gallary';
import Home from './pages/Home';

const datas =[
  {
    name :'ehsan company',
    location:'bogura',
    id :1
  },
  {
    name :'pabna sweets ',
    location : 'pabna',
    id :2
  }
]
function App() {

  const [info,setInfo] =useState(datas)

  return (
   <div>
     {/* this section is used for contect api */}
     <ContextValue.Provider value={info} >
      <Main />
     </ContextValue.Provider>

     {/* the example of reaact router */}
     
     
     <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' />
        <Route path='/home'        element={<Home/>} />
        <Route path='/about'   element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/gallary" element={<Gallary /> }/>
      </Routes>
     </BrowserRouter>

     
   </div>
  );
}

export default App;
