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
        Crafting Native Applications For Multiple Platforms
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
            Delivering custom native apps with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Cross Platform App Development Services offer comprehensive
            solutions to businesses and entrepreneurs seeking to reach a broader
            audience through mobile applications. By leveraging cutting-edge
            technologies and frameworks, these services enable the creation of
            versatile apps that function seamlessly across various platforms,
            including iOS, Android, and Windows. This approach streamlines the
            development process, reducing time-to-market and costs while
            maintaining app performance and user experience consistency. With a
            team of skilled developers experienced in cross-platform
            development, businesses can achieve wider market penetration, higher
            user engagement, and increased brand visibility. Embrace the future
            of app development with these services, unlocking the potential for
            success in the competitive digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
