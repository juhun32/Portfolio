import React from "react";
import intro2 from "../img/intro2.jpg";
import "../css/Intro.css";

const Intro = () => {
  return (
    <div>
      <section className="intro">
        <p className="section__title section__title--intro">Hello world, I am</p>
        <p className="section__title section__title--name">Juhun Park</p>
        <img
          className="intro__img"
          src={intro2}
          alt="a picture of yourself"
          class="intro__img"
        />
      </section>

      <div className="intro__div"></div>
      {/* <p className="intro__div--subtitle">Hi! My name is Juhun Park.</p> */}
    </div>
  );
};

export default Intro;
