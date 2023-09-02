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
          alt="Azure Services"
        />
      </div>

      <div>
        <h2 id="header" ref={sectionRef}>
          The Significance of Azure Services
        </h2>
        <p className={style.para} id="header" ref={sectionRef}>
          In the fast-changing digital landscape we operate in today, adopting
          cloud technology is not merely a choice; it is a crucial strategic
          move. The forefront of this technological revolution lies in the
          Microsoft Azure services, which offer a wide range of advantages that
          can significantly impact the growth, efficiency, and innovation of
          your enterprise. With Azure, you acquire the ability to adjust your
          resources as required, enabling flexibility in a competitive
          marketplace. The strong security features and adherence to compliance
          protocols inspire confidence in safeguarding your valuable
          information. Azure's data management and analysis capabilities unlock
          invaluable perspectives, facilitating well-informed decision-making.
          Furthermore, Azure's seamless integration with cutting-edge
          technologies empowers you to create, deploy, and oversee applications
          with unparalleled speed and effectiveness. By leveraging Azure
          solutions, you not only embrace the current state of affairs but also
          assure a thriving and dynamic future for your organization.
        </p>
      </div>
    </div>
  );
}

export default Section;
