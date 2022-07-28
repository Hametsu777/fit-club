import React, { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import "./Testimonials.css";
import Left_Arrow from "../../assets/left-arrow.png";
import Right_Arrow from "../../assets/right-arrow.png";
import { motion } from "framer-motion";

export default function Testimonials() {
  const transition = { type: "string", duration: 2.5 };
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-testimonials">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span style={{ color: "var(--orange)" }}>
          {testimonialsData[selected].name}
        </span>
        <span>{testimonialsData[selected].status}</span>
      </div>

      <div className="right-testimonials">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={Left_Arrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === testimonialsLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={Right_Arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
