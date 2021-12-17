import React from "react";

import { Container } from "react-bootstrap";
import NFTImage1 from "../../assets/images/nft1.png";
function Welcome() {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-7">
          <h1 className="font-italic mt-3 welcome-text">
            WELCOME TO THE <br /> BORED APE YATCH CLUB
          </h1>
          <p>
            BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
            collectibles living on the Ethereum blockchain. Your Bored Ape
            doubles as your Yacht Club membership card, and grants access to
            members-only benefits, the first of which is access to THE BATHROOM,
            a collaborative graffiti board. Future areas and perks can be
            unlocked by the community through roadmap activation.
          </p>
        </div>
        <div className="col-lg-4 my-lg-auto offset-lg-1">
          <div className="row">
            <div className="col-6 pb-4 pr-2">
              <img src={NFTImage1} className="img-fluid" />
            </div>
            <div className="col-6 pb-4 pr-2">
              <img src={NFTImage1} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 pb-4 pr-2">
              <img src={NFTImage1} className="img-fluid" />
            </div>
            <div className="col-6 pb-4 pr-2">
              <img src={NFTImage1} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <h3>FAIR DISTRIBUTION</h3>
          <h4>(BONDING CURVES ARE A PONZI)</h4>
        </div>
        <div className="mb-2 mb-lg-2 col-lg-7 col-12">
          <p>
            There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH.
            There are no price tiers; BAYC membership costs the same for
            everyone.
          </p>
        </div>
        <div className="col-lg-4 col-12 offset-lg-1">
          <p>
            Note: Thirty apes are being withheld from the sale. These will be
            used for giveaways, puzzle rewards—and for the creators' BAYC
            memberships.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
