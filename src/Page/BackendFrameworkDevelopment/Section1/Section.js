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
          The Importance of AWS Solutions for Your Business
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In the rapidly evolving realm of digital transformation, adopting
          Amazon Web Services (AWS) is not just a decision; it's a strategic
          necessity. AWS solutions provide a range of advantages that can
          significantly influence your business's effectiveness, scalability,
          and ingenuity. With AWS, you obtain the capability to adjust your
          resources dynamically, allowing for agility in a competitive market.
          The robust security characteristics and compliance procedures instil
          trust in safeguarding your confidential information. AWS's advanced
          data management and analytics abilities empower data-based
          decision-making, propelling your business ahead. Furthermore, AWS's
          cloud-native approach expedites application development and
          deployment, enabling you to remain ahead in a swiftly changing realm.
          By adopting AWS solutions, you are not only embracing the present but
          also securing a foundation that is prepared for the future success of
          your business.
        </p>
      </div>
    </div>
  );
}

export default Section;
