import React from "react";
import { Container } from "react-bootstrap";

import "./buyanape.scss";
function BuyAnApe() {
  return (
    <Container>
      <div className="row m-auto p-4" id="buy-an-ape">
        <div className="col-lg-3 col-12 m-auto">
          <h3 className="buy-ape-title">BUY AN APE</h3>
        </div>
        <div className="col-lg-4 col-12 m-auto offset-lg-1">
          <p className="common-p-black">
            The initial sale has sold out. To get your Bored Ape, check out the
            collection on OpenSea.
          </p>
        </div>
        <div className="col-lg-3 col-12 m-auto offset-lg-1">
          <a>
            <button className="bayc-btn">BUY AN APE ON OPENSEA</button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default BuyAnApe;
