import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HomeNovinar from "./pages/HomeNovinar";
import HomeUrednik from "./pages/HomeUrednik";
import NewsPage from "./pages/NewsPage";
import CreateNewsPage from "./pages/CreateNewsPage";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Novinar" element={<HomeNovinar />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Urednik" element={<HomeUrednik />}></Route>
          <Route exact path="/News/:id" element={<NewsPage />}></Route>
          <Route exact path="/CreateNews" element={<CreateNewsPage />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
