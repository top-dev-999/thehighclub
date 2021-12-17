import React from "react";

//import assets
import MainImage from "../assets/images/main.jpg";
//import Components
import Welcome from "../components/welcome/welcome";
import BuyAnApe from "../components/buyanape/buyanape";
import Spec from "../components/specs/specs";
import WelcomeClub from "../components/welcome-club/welcome-club";
function HomePage() {
  return (
    <>
      <div className="main-image mb-5">
        <img src={MainImage} width="100%" />
      </div>
      <Welcome />
      <BuyAnApe />
      <Spec />
      <WelcomeClub />
    </>
  );
}

export default HomePage;
