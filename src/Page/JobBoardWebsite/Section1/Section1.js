import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/crossbg.png";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

function Section1() {
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
      <h1 id="header" ref={sectionRef}>
        Crafting Job Board Website For Multiple Platforms
      </h1>
      <div className={style.innercontain}>
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
          <h2 id="header" ref={sectionRef}>
            Delivering custom Job Board Website with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Job Board Website Development Services offer expert solutions to
            create powerful and customized platforms that effectively connect
            job seekers and employers. With user-friendly interfaces and
            seamless integration, we ensure a smooth and efficient experience
            for both parties. Our team of skilled developers will tailor the
            website to meet your specific needs, incorporating advanced search
            features, resume upload capabilities, and automated job posting
            options. Whether you are a startup or an established recruitment
            agency, our services will help you boost your online recruiting
            success and streamline the job search process. Stay ahead in the
            competitive job market with our top-notch job board website
            development services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
