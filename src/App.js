import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Help from './pages/Help';
import Firstaidkit from './pages/Firstaidkit';
import Firstaid from "./Homepages/Firstaid";
import  Police from "./Homepages/Police";
import Fireforce from "./Homepages/Fireforce";
import Emergency from './Homepages/Emergency';
import Accident from "./Firstaidpages/Accidents";
import Bleeding from "./Firstaidpages/Bleeding";
import Burns from "./Firstaidpages/Burns";
import Chocking from "./Firstaidpages/Choking";
import Drowning from "./Firstaidpages/Drowning";
import Fainting from "./Firstaidpages/Fainting";
import Fits from "./Firstaidpages/Fits";
import Fracture from "./Firstaidpages/Fracture";
import Heartattack from "./Firstaidpages/Heartattack"
import Snakebite from "./Firstaidpages/Snakebite";
import Sprain from "./Firstaidpages/Sprain";
import Insectbite from "./Firstaidpages/Insectbite";


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar/>  
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/help" exact element={<Help/>} />
            <Route path="/firstaidkit" exact element={<Firstaidkit/>} />  
            <Route path="/firstaid" element={<Firstaid/>}/>
            <Route path="/emergency" element={<Emergency/>}/>
            <Route path="/police" element={<Police/>}/>
            <Route path="/fireforce" element={<Fireforce/>}/>
            <Route path="/accidents" exact element={<Accident/>} />
            <Route path="/bleeding" exact element={<Bleeding/>} />
            <Route path="/burns" exact element={<Burns/>} />  
            <Route path="/chocking" element={< Chocking/>}/>
            <Route path="/drowning" element={<Drowning/>}/>
            <Route path="/fainting" element={<Fainting/>}/>
            <Route path="/fits" element={<Fits/>}/>
            <Route path="/fracture" exact element={<Fracture/>} />
            <Route path="/heartattack" exact element={<Heartattack/>} />
            <Route path="/snakebite" exact element={<Snakebite/>} />  
            <Route path="/sprain" element={<Sprain/>}/>
            <Route path="/insectbite" element={<Insectbite/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
