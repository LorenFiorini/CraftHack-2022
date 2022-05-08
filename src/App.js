import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuideInfo from "./components/GuideInfo";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import FirstPage from "./components/FirstPage";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="tier">
          <img src="img/phone-frame.png" alt="phone" className=" bg_app" />
        <div className="tier-content">
          <Routes>
            <Route path="/" element={<FirstPage />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/guideinfo" element={<GuideInfo />} />
            <Route path="/userinfo" element={<UserInfo />} />
          </Routes>{" "}
        </div>
        
      </div>
    </Router>
  );
};

export default App;
