import React, { useRef, useEffect } from "react";
import style from "./Section.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section() {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  useEffect(() => {
    const fadeInTimeline = gsap.timeline({ paused: true });
    fadeInTimeline.to("#header", {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      duration: 1,
    });

    const fadeOutTimeline = gsap.timeline({ paused: true });
    fadeOutTimeline.to("#header", {
      opacity: 0,
      y: -50,
      ease: "power4.out",
      duration: 1,
    });

    if (intersection && intersection.intersectionRatio < 0.2) {
      fadeOutTimeline.play();
    } else {
      fadeInTimeline.play();
    }
  }, [intersection]);

  return (
    <div className={style.main}>
      <div>
        <img
          id="header"
          ref={sectionRef}
          className={style.img}
          src={img}
          alt="img"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Importance of Website UI/UX Design Services
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the digital realm, flawless Website UI/UX design is a game-changer.
          An appealing User Interface (UI) and seamless User Experience (UX)
          design shape how users engage with your website. A welcoming UI builds
          trust and encourages exploration, while a seamless UX ensures
          effortless navigation and involvement. Outstanding UI/UX design sets
          your website apart, fostering recurring visits and positive
          interactions. Professional design isn't solely about visuals – it's
          about developing a user-focused environment that enhances engagement,
          conversions, and overall online success. At EasyRyt, we comprehend
          this impact and are committed to crafting designs that captivate
          users, enhance interactions, and contribute to your continuous digital
          triumph.
        </p>
      </div>
    </div>
  );
}

export default Section;
