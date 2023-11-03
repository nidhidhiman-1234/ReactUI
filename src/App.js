import "./index.css";
import "./App.css";
import './font/Univers-light-normal.ttf'
import './font/UniversBlack.ttf'
import './font/UniversLTStd.otf'
import './font/UniversLTStd-Bold.otf'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/landingPage";

import MainScreen from "./components/main";
import Form1 from "./components/form/form";
import Test from "./components/test/test";
import Dummy from "./components/dummy/dummy";
import Header from "./components/Header/header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/main" element={<MainScreen />} />
            <Route exact path="/header" element={<Header />} />
          <Route path="/products/:id" element={<Dummy/>} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
