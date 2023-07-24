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
        Crafting Full Stack Website Development For Multiple Platforms
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
            Delivering custom Full Stack Website Development with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Our Full Stack Website Development Services provide a holistic
            approach to building powerful and dynamic websites. Our expert team
            is well-versed in both front-end and back-end technologies, ensuring
            a seamless user experience and robust functionality. We excel in
            creating responsive and visually appealing user interfaces, while
            also proficiently handling server-side scripting and database
            integration. From conceptualization to deployment, we deliver
            end-to-end solutions tailored to meet your specific business needs.
            With a keen focus on scalability and performance, our websites are
            built to adapt and grow with your business. Trust us to create
            user-friendly, secure, and high-performing websites that leave a
            lasting impression on your audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
