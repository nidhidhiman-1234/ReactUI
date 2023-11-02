import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/landingPage";

import MainScreen from "./components/main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/main" element={<MainScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
