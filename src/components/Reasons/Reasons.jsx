import React from "react";
import "./Reasons.css";
import Adidas from "../../assets/adidas.png";
import Bicep_Curl from "../../assets/bicep-curl.png";
import Carry from "../../assets/carry.png";
import Curl from "../../assets/curl.png";
import Nb from "../../assets/nb.png";
import Nike from "../../assets/nike.png";
import Tick from "../../assets/tick.png";
import Tricep_Kickback from "../../assets/tricep-kickback.png";

export default function Reasons() {
  return (
    <div className="reasons" id="reasons-id">
      <div className="left-reasons">
        <img src={Carry} alt="" />
        <img src={Curl} alt="" />
        <img src={Tricep_Kickback} alt="" />
        <img src={Bicep_Curl} alt="" />
      </div>
      <div className="right-reasons">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-right">
          <div>
            <img src={Tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={Nb} alt="" />
          <img src={Adidas} alt="" />
          <img src={Nike} alt="" />
        </div>
      </div>
    </div>
  );
}
