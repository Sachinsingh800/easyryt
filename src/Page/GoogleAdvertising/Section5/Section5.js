import * as React from "react";

import style from "./Section5.module.css";
import { GoogleAdvertising} from "../../../Component/PageAccordian/PageAccordian";

export default function Section5() {
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
          <GoogleAdvertising/>
      </div>
    </div>
  );
}