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
          alt="Third-Party Services"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Importance of Incorporating Third-Party Services
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In today's interconnected digital world, the ability to smoothly
          incorporate external services has become a crucial element in
          enhancing the capabilities of businesses and organizations. The
          integration of external services opens the door to extended
          functionality, streamlined processes, and improved user experiences.
          By utilizing the power of application programming interfaces (APIs)
          and partnerships, businesses can gain access to payment gateways,
          social media platforms, data analysis tools, and more, ultimately
          enhancing operational efficiency and customer interaction. The
          incorporation of Customer Relationship Management (CRM) and Enterprise
          Resource Planning (ERP) systems facilitates seamless data exchange,
          leading to more informed decision-making. Furthermore, e-commerce
          platforms can leverage external service integrations to provide
          customers with unified experiences and effortlessly manage product
          synchronization. By investing in professional external service
          integration solutions, you not only expand your digital capabilities
          but also ensure that your systems operate harmoniously, delivering
          value and innovation to both your team and your customers.
        </p>
      </div>
    </div>
  );
}

export default Section;
