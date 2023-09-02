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
          alt="Building Ecommerce Websites"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          Importance of Building Ecommerce Websites
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          The realm of digital advancements has completely transformed the
          manner in which businesses function, and electronic commerce is
          leading the way in this revolutionary change. Your virtual
          representation on the internet stands as your electronic store, and a
          meticulously designed ecommerce website serves as the pivotal tool to
          access a worldwide customer base, boost sales, and establish
          long-lasting brand perceptions. Regardless of whether you are a newly
          established enterprise venturing into online retail or a well-known
          brand seeking to elevate your online presence, our Services for
          Developing Ecommerce Websites are specifically designed to accommodate
          your distinct requirements and ambitions.
        </p>
      </div>
    </div>
  );
}

export default Section;
