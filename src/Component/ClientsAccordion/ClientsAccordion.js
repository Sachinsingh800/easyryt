import * as React from "react";

import style from "./ClientsAccordion.module.css";
import { Servicesaccordian } from "../Accordion/Accordion";

export default function ClientsAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={style.main}>
      <h1>Frequently Asked Questions</h1>
      <p>
        We listen to query and provide solutions that captivate users. Feel free
        to contact us in case of any query which is not mention below.
      </p>
      <div className={style.container}>
          <Servicesaccordian/>
      </div>
    </div>
  );
}
