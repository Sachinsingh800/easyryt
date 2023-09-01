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
          alt="Google Cloud Services"
        />
      </div>

      <div>
        <h1 id="header" ref={sectionRef}>
          The Significance of Google Cloud Services for Your Company
        </h1>
        <p className={style.para} id="header" ref={sectionRef}>
          In a time of swift technological progress, embracing Google Cloud
          Platform (GCP) is not only a fad, but also a strategic maneuver for
          businesses aiming to flourish in a digital era. Google Cloud solutions
          provide a plethora of advantages that can profoundly influence your
          company's effectiveness, flexibility, and inventiveness. With GCP, you
          acquire the capability to seamlessly expand resources, guaranteeing
          that your company remains adaptable in a competitive environment. The
          robust measures for security and adherence to protocols instill
          confidence in the protection of your sensitive data. GCP's
          cutting-edge data administration and analytical capabilities empower
          you to utilize valuable insights, guiding smart decision-making.
          Moreover, GCP's cloud-native approach expedites application
          development, enabling you to stay ahead in a rapidly evolving market.
          By embracing Google Cloud services, you are not just embracing
          technology, but also establishing the groundwork for the future
          success of your company.
        </p>
      </div>
    </div>
  );
}

export default Section;
