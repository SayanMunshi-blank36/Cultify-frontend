import React from "react";
import logo from "../img/logo.jpg";
import "./CultSelection.css";

function CultSelection() {
  function postData() {}

  return (
    <div className="cultSelection">
      <div className="heading">
        <img className="cultifyLogo" src={logo} alt="logo" />
        <h1>Cultify </h1>
      </div>
      <p className="detail">Choose atleast 2 cults to continue</p>
      <div className="cults">
        <div className="cult"> Cult one</div>
        <div className="cult"> Cult seven</div>
        <div className="cult"> Cult six</div>
        <div className="cult"> Cult five</div>
        <div className="cult"> Cult four</div>
        <div className="cult"> Cult three</div>
        <div className="cult"> Cult two</div>
        <div className="cult"> Cult nine</div>
        <div className="cult"> Cult one</div>
        <div className="cult"> Cult seven</div>
        <div className="cult"> Cult six</div>
        <div className="cult"> Cult five</div>
        <div className="cult"> Cult four</div>
        <div className="cult"> Cult three</div>
        <div className="cult"> Cult two</div>
        <div className="cult"> Cult nine</div>
        <div className="cult"> Cult four</div>
        <div className="cult"> Cult three</div>
        <div className="cult"> Cult two</div>
        <div className="cult"> Cult nine</div>
      </div>
      <button className="cultSelection-btn" onClick={postData()}>
        Continue
      </button>
    </div>
  );
}

export default CultSelection;
