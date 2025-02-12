import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Main from './componets/main';
import SideBar from './componets/side-bar';
import { Light } from './componets/light';
import { useState } from 'react';
import About from './componets/about';
import Skills from './componets/skills';
import Samples from './componets/samples';
import Workes from './componets/workes';
import Contact from './componets/contact';

function App() {
  const [light, setLight] = useState(true);
  return (
    <Light.Provider value={{setLight, light}}>
      <div className="h-screen flex overflow-y-auto lg:overflow-y-visible">
        <BrowserRouter>
          <SideBar />
          <Main>
            <Routes>
              <Route Component={About} path='/'/>
              <Route Component={Skills} path='/skills/'/>
              <Route Component={Samples} path='/sample/'/>
              <Route Component={Workes} path='/workes/'/>
              <Route Component={Contact} path='/contact/'/>
            </Routes>
          </Main>
        </BrowserRouter>
      </div>
    </Light.Provider>
  );
}

export default App;
