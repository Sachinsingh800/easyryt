import React , {useRef,useEffect} from "react";
import style from "./FifthSection.module.css";
import Form from "../../Component/Form/Form";
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';

function FifthSection() {
    
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
      <div  id="header" ref={sectionRef} className={style.leftBox}>
        <span >Let's Get Started</span>
        <p>
          We offer full-cycle technology solutions that streamline your digital
          transformation journey. With cutting-edge technical expertise, complex
          business challenges with INT. simplifies innovative solutions for 100+
          fastest-growing enterprises.
        </p>
      </div>
      <div className={style.rightBox}>
        
          <Form />

      </div>
    </div>
  );
}

export default FifthSection;
