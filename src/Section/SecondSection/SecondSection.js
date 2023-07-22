import React, { useRef, useEffect } from 'react';
import style from './SecondSection.module.css';
import { gsap } from 'gsap';
import { useIntersection } from 'react-use';
import { Counter1, Counter2, Counter3, Counter4, Counter5 } from '../../Component/Counter/Counter';

function SecondSection() {
  
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
      <div className={style.container}>
      <h1 id="header" ref={sectionRef}>
        ABOUT US
      </h1>
      <div id="header" ref={sectionRef} className={style.innerbox}>
        <h2>We Provide Custom Web Design, Mobile App Development Solutions for your venture or start-ups.</h2>
        <p>
          We are professional and experienced in delivering Customized & Superior quality Web Design and App
          development solutions at the most reasonable price. Here we assist you to Figure out the finest results
          out of your funds through our digital services.
        </p>
      </div>
      <div id="header" ref={sectionRef} className={style.bottominnerbox}>
        <h2>
          <span className={style.span}>
            <Counter1 />+
          </span>
          <p>Years Of Experience</p>
        </h2>
        <h2>
          <span className={style.span}>
            <Counter2 />+
          </span>
          <p>Clients all over the world</p>
        </h2>
        <h2>
          <span className={style.span}>
            <Counter3 />+
          </span>
          <p>Web & Apps Delivered</p>
        </h2>
        <h2>
          <span className={style.span}>
            <Counter4 />%
          </span>
          <p>Consistent Growth rate since 2017</p>
        </h2>
        <h2>
          <span className={style.span}>
            <Counter5 />%
          </span>
          <p>Repeat Clients</p>
        </h2>
        <button>Learn more</button>
      </div>
      </div>
    </div>
  );
}

export default SecondSection;
