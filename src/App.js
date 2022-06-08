import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ContextValue } from './ContextApi/Context/Context';
import Main from './ContextApi/Main';
import Nav from './Navigation/Nav';

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
     </BrowserRouter>

     
   </div>
  );
}

export default App;
