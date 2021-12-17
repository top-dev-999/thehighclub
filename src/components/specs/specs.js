import React from "react";
import { Container } from "react-bootstrap";

import "./specs.scss";
import MysteryGif from "../../assets/images/mystery-ape.gif";
function Spec() {
  return (
    <Container>
      <div className="row py-5">
        <div className="mb-3 col-lg-7 col-12">
          <h2 className="common-title">THE SPECS</h2>
          <p>
            Each Bored Ape is unique and programmatically generated from over
            170 possible traits, including expression, headwear, clothing, and
            more. All apes are dope, but some are rarer than others.
          </p>
          <p>
            The apes are stored as ERC-721 tokens on the Ethereum blockchain and
            hosted on IPFS. (
            <a className="link" href="#/provenance">
              See Record and Proof.
            </a>
            ) Purchasing an ape costs
          </p>
          <p>
            To access members-only areas such as
            <a className="link" href="#/bathroom">
              THE BATHROOM
            </a>
            , Apeholders will need to be signed into their Metamask Wallet.
          </p>
        </div>
        <div className="my-auto col-lg-4 col-12 offset-lg-1">
          <img src={MysteryGif} width="100%" />
        </div>
      </div>
    </Container>
  );
}

export default Spec;
