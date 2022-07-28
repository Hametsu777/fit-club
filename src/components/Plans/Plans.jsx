import React from "react";
import { plansData } from "../../data/plansData";
import "./Plans.css";
import White_Tick from "../../assets/white-tick.png";

export default function Plans() {
  return (
    <div className="plans-container">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US NOW</span>
      </div>

      {/* PLANS CARD */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={White_Tick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits &#x279C;</span>
            </div>

            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
