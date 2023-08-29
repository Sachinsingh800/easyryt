import React from "react";
import style from "./Section4.module.css";
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className={style.main}>
      <p>
        In the rapidly changing landscape of technological progress, adopting
        Microsoft Azure is not merely a decision; it is a crucial strategy for
        maintaining a competitive edge. At EasyRyt, we not only provide Azure
        services, but we also offer the potential for transformation, growth,
        and innovation. Our dedicated team of Azure specialists possesses not
        only technical expertise but also a profound understanding of your
        business's unique requirements. We have successfully navigated Azure's
        complexities for numerous enterprises, and we are fully prepared to
        assist you every step of the way. As you venture into the realm of
        Azure, our partnership goes beyond delivering mere solutions. It is
        about fostering collaboration, comprehension, and tailoring bespoke
        solutions that align with your aspirations. From formulating seamless
        migration strategies to designing future-proof infrastructures, our
        approach is rooted in a commitment to your success. So, why should you
        entrust us with your Azure journey? The answer lies in our comprehensive
        approach, our proven track record, and our unwavering dedication to
        empowering your growth. We do not merely offer Azure services; we
        provide an entryway to a future where your business flourishes in the
        cloud. The choice is evident: select EasyRyt to redefine your Azure
        experience today!
      </p>
      <h2>Get in touch with us today</h2>
      <p>
        Let’s discuss discuss how we can enhance your brand with a Native mobile
        app that sets you apart in the digital landscape!
      </p>
      <button
        onClick={() => (window.location.href = "/Contact-Us")}
        className={style.btn}
      >
        Start Conversation
      </button>
    </div>
  );
}

export default Section4;
