import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextValue } from './ContextApi/Context/Context';
import Main from './ContextApi/Main';
import Nav from './Navigation/Nav';
import Page404 from './pages/404';
import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import FeatureProducts from './pages/FeatureProducts';
import Gallary from './pages/Gallary';
import Home from './pages/Home';
import NewProducts from './pages/NewProducts';
import Products from './pages/Products';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';

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
        <Route path='home'    element={<Home/>} />
        <Route path='about'   element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path="gallary" element={<Gallary /> }/>

        <Route path="products" element={<Products /> } >
            <Route index element={<NewProducts />}/>
            <Route path="feature" element={<FeatureProducts />}/>
            <Route path="new" element={<NewProducts />}/>
        </Route>

        {/* dynamic routing */}

        {/* <Route path="users" element={<Users /> }/>
        <Route path="users/:userId" element={<UserDetails /> }/>
        <Route path="users/admin" element={<Admin /> }/> */}

        {/* nested dynamic routing  */}

      <Route path="users" element={<Users /> }>
        <Route path=":userId" element={<UserDetails /> }/>
        <Route path="admin" element={<Admin /> }/> 
      </Route>


        <Route path="*" element={<Page404 /> }/>
      </Routes>
     </BrowserRouter>

     
   </div>
  );
}

export default App;
