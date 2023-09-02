import * as React from "react";

import style from "./Section5.module.css";
import { APIDevelopment } from "../../../Component/PageAccordian/PageAccordian";

export default function Section5() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={style.main}>
      <h2>Frequently Asked Questions</h2>
      <p>
        We listen to query and provide solutions that captivate users. Feel free
        to contact us in case of any query which is not mention below.
      </p>
      <div className={style.container}>
          <APIDevelopment/>
      </div>
    </div>
  );
}