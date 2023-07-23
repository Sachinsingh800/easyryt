import React, { useRef, useEffect } from "react";
import style from "./Section1.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png";
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
            Our Native Mobile Application Development Services are designed to
            elevate your business in the digital world. With a team of skilled
            developers, we create cutting-edge, user-centric apps for both iOS
            and Android platforms. Our expertise lies in crafting
            high-performance, secure, and scalable solutions that seamlessly
            integrate with your brand identity. From ideation to deployment, we
            ensure a smooth development process, incorporating the latest
            technologies and industry best practices. Whether it's a consumer
            app, enterprise solution, or anything in between, we tailor our
            services to meet your specific requirements, delivering exceptional
            user experiences that drive engagement and growth. Step into the
            mobile realm and unlock your business's full potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
