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
        Crafting  Cloud Services Integration For Multiple Platforms
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
            Delivering custom  Cloud Services Integration with dedicated expertise
          </h2>
          <p id="header" ref={sectionRef}>
            Cloud Services Integration Services offer comprehensive solutions to
            connect, unify, and streamline cloud-based applications, data, and
            systems. By leveraging integration tools and middleware, these
            services enable seamless communication, data synchronization, and
            process automation between different cloud platforms and on-premises
            environments. They facilitate efficient data transfer, real-time
            updates, and secure access to cloud resources, enhancing
            collaboration and productivity. With scalable and flexible
            integration options, businesses can optimize their workflows,
            enhance customer experiences, and harness the full potential of
            their cloud investments. Whether for data migration, API management,
            or application integration, these services ensure smooth, reliable,
            and agile operations in the cloud ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
