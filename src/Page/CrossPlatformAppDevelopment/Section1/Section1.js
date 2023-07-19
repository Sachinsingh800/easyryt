import React,{useRef,useEffect} from "react";
import style from "./Section1.module.css";
import img from "../../../Image/have-a-great-idea-for-an-app.png"
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';


function Section1() {

  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  useEffect(() => {
    const fadeInTimeline = gsap.timeline({ paused: true });
    fadeInTimeline.to('#header', { opacity: 1, y: -60, ease: 'power4.out', duration: 1 });

    const fadeOutTimeline = gsap.timeline({ paused: true });
    fadeOutTimeline.to('#header', { opacity: 0, y: -50, ease: 'power4.out', duration: 1 });

    if (intersection && intersection.intersectionRatio < 0.2) {
      fadeOutTimeline.play();
    } else {
      fadeInTimeline.play();
    }
  }, [intersection]);

  return (
    <div className={style.main}>
      <h1 id="header" ref={sectionRef}>Crafting Native Applications For Multiple Platforms</h1>
      <div className={style.innercontain}>
        <div>
           <img id="header" ref={sectionRef} className={style.img} src={img} alt="img" />
        </div>
        <div>
          <h2 id="header" ref={sectionRef}>Delivering custom native apps with dedicated expertise</h2>
          <p id="header" ref={sectionRef}>
            Native Mobile application development is commonly employed in in-
            app gaming. Therefore, great care must be used while selecting this
            kind of service. As a Native app development company, we are capable
            of understanding both your needs and your budget. We are one of the
            leading native application development firms with the expertise to
            help your company expand and achieve new heights. Our native app
            development services include native app development in Android and
            Windows. In these native mobile apps, we deliver great features such
            as Beacon Technology, multitasking, 3D Touch, and much more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
