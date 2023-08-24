import * as React from "react";

import style from "./ClientsAccordion.module.css";
import { ClientServicesaccordian} from "../Accordion/Accordion";

export default function ClientsAccordion() {




  return (
    <div className={style.main}>
      <h1>Frequently Asked Questions</h1>
      <p>
        We listen to query and provide solutions that captivate users. Feel free
        to contact us in case of any query which is not mention below.
      </p>
      <div className={style.container}>
          <ClientServicesaccordian/>
      </div>
    </div>
  );
}
