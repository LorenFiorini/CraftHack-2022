import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuideInfo from "./components/GuideInfo";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import TourBtn from "./components/TourBtn";
import "./style.scss";

const App = () => {
  return (
    <Router>
      <div className="tier">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/guidinfo" element={<GuideInfo />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/" element={<TourBtn />} exact />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
