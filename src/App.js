import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuideInfo from "./components/GuideInfo";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import TourBtn from "./components/TourBtn";
import FirstPage from "./components/FirstPage";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div className="tier">
          <img src="img/phone-frame.png" alt="phone" className=" bg_app" />
        <div className="tier-content">
        {/* <div className="scrollable"> */}
          <Routes>
            <Route path="/" element={<FirstPage />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/guidinfo" element={<GuideInfo />} />
            <Route path="/userinfo" element={<UserInfo />} />
            {/* <Route path="/" element={<TourBtn />} exact /> */}
          </Routes>{" "}
        {/* </div> */}
        </div>
        
      </div>
    </Router>
  );
};

export default App;
