import { useState } from 'react';
import './App.css';
import { ContextValue } from './ContextApi/Context/Context';
import Main from './ContextApi/Main';

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

     {/* the example of reaact router 
     
     git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MimHakknai/ReactRouter6.git
git push -u origin main
     */}
     
   </div>
  );
}

export default App;
