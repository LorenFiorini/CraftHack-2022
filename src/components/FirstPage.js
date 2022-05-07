import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  const tourButtonHandler = () => {
    navigate("./login");
  };

  const [currentScreen, setCurrentScreen] = useState("splash");

  function displayOut() {
    var x = document.getElementById("splashScreen");

    setTimeout(function () {
      x.style.opacity = "0";
    }, 2000);
  }

  useEffect(() => {
    displayOut();
    setTimeout(function () {
      setCurrentScreen("landing");
    }, 1000);
  }, []);
  return (
    <div className="first-page">
      {currentScreen === "splash" && (
        <img
          id="splashScreen"
          src="/img/splash.png"
          alt="Splash screen"
          className="prototype_images"
        />
      )}

      {currentScreen === "landing" ? (
          <div className="landing">
          <img
            src="/img/landing.png"
            alt="sidebarcreen"
            className="prototype_images"
          />
          <button onClick={()=> setCurrentScreen("sidebar")}>h</button>
        </div>
          
      ) : (
        <div className="sidebar">
          <img
            src="/img/sidebar.png"
            alt="sidebarcreen"
            className="prototype_images"
          />
          <button onClick={tourButtonHandler}>C</button>
        </div>
      ) }
    </div>
  );
};

export default FirstPage;
