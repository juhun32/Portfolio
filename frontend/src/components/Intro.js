import React from "react";
import intro2 from "./img/intro2.jpg";

const Intro = () => {
  return (
    <div>
      <section class="intro">
        <h1 class="section__title section__title--intro">
          Hi, I am <strong>Juhun Park</strong>
        </h1>
        <img
          className="intro__img"
          src={intro2}
          alt="a picture of yourself"
          class="intro__img"
        />
      </section>

      <div className="intro__div"></div>
      {/* <p className="intro__div--subtitle">Hi! My name is Juhun Park.</p> */}

      <section class="contact">
        <h3 className="contact__title">My Contacts :</h3>
        <ul class="contact__links">
          <li class="contact__link">
            <a href="mailto:juhunpark32@email.com">
              <img
                class="contact__img"
                src={require("./img/email.png")}
                alt="email"
              />
            </a>
          </li>
          <li class="contact__link">
            <a href="https://linkedin.com/in/juhun-park">
              <img
                class="contact__img"
                src={require("./img/linkedin.png")}
                alt="linkedin"
              />
            </a>
          </li>
          <li class="contact__link">
            <a href="https://github.com/juhun32">
              <img
                class="contact__img"
                src={require("./img/github.png")}
                alt="github"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Intro;
