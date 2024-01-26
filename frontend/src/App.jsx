import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HomeNovinar from "./pages/HomeNovinar";
import HomeUrednik from "./pages/HomeUrednik";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Novinar" element={<HomeNovinar />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Urednik" element={<HomeUrednik />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
