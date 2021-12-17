import React from "react";
import { Container } from "react-bootstrap";

//import css
import "./welcome-club.scss";

//import assets
import Club1Image from "../../assets/images/club1.png";
import Club2Image from "../../assets/images/club2.png";
import Club3Image from "../../assets/images/club3.png";
import Club4Image from "../../assets/images/club4.png";
import Club5Image from "../../assets/images/club5.png";
function WelcomeClub() {
  return (
    <Container>
      <div className="row py-5">
        <h2 className="common-title">WELCOME TO THE CLUB</h2>
        <p className="common-p">
          When you buy a Bored Ape, you’re not simply buying an avatar or a
          provably-rare piece of art. You are gaining membership access to a
          club whose benefits and offerings will increase over time. Your Bored
          Ape can serve as your digital identity, and open digital doors for
          you.
        </p>
      </div>
      <div className="row py-5">
        <div className="mx-auto col-md-2 col-12">
          <div className="mb-4 mb-md-0 row">
            <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
              <img src={Club1Image} className="img-fluid m-auto club-img" />
            </div>
            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
              <p className="mb-0 common-sub-p text-md-center">
                10,000 Provably-rare Bored Ape tokens
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto col-md-2 col-12">
          <div className="mb-4 mb-md-0 row">
            <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
              <img src={Club2Image} className="img-fluid m-auto club-img" />
            </div>
            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
              <p className="mb-0 common-sub-p text-md-center">
                Fair Launch, fair distribution: All apes cost 0.08 ETH
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto col-md-2 col-12">
          <div className="mb-4 mb-md-0 row">
            <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
              <img src={Club3Image} className="img-fluid m-auto club-img" />
            </div>
            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
              <p className="mb-0 common-sub-p text-md-center">
                Ownership and commercial usage rights given to the consumer over
                their NFT
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto col-md-2 col-12">
          <div className="mb-4 mb-md-0 row">
            <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
              <img src={Club4Image} className="img-fluid m-auto club-img" />
            </div>
            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
              <p className="mb-0 common-sub-p text-md-center">
                The Bathroom: A member's-only graffiti board
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto col-md-2 col-12">
          <div className="mb-4 mb-md-0 row">
            <div className="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
              <img src={Club5Image} className="img-fluid m-auto club-img" />
            </div>
            <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
              <p className="mb-0 common-sub-p text-md-center">
                Gain additional benefits through roadmap activations
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WelcomeClub;
