import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./ClientsAccordion.module.css";

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
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
            >
              Q. What are AWS cloud services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
          >
            <Typography
              sx={{ minWidth: "90%", flexShrink: 0, textAlign: "left" }}
            >
              AWS (Amazon Web Services) is a comprehensive and widely-used cloud
              computing platform provided by Amazon. It offers a vast array of
              cloud services and solutions that cater to a wide range of
              business needs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
            >
              Q. Are AWS and cloud computing the same?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ minWidth: "90%", flexShrink: 0, textAlign: "left" }}
            >
              No, AWS (Amazon Web Services) and cloud computing are not the
              same, but there is a close relationship between them.
              <br />
              <br />
              Cloud computing is a broad and general term that refers to the
              delivery of computing services over the internet. It involves the
              provision of on-demand computing resources, such as computing
              power, storage, databases, networking, software, and more, without
              the need for direct management and maintenance by the user. Cloud
              computing enables users to access and use these resources on a
              pay-as-you-go basis, scaling up or down as needed, which can be
              more cost-effective and flexible compared to traditional
              on-premises infrastructure.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
            >
              Q. What type of cloud service is AWS?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ minWidth: "90%", flexShrink: 0, textAlign: "left" }}
            >
              AWS (Amazon Web Services) is a cloud service provider, offering a
              comprehensive set of cloud computing services. It falls under the
              category of "Infrastructure as a Service" (IaaS), "Platform as a
              Service" (PaaS), and "Software as a Service" (SaaS) offerings,
              making it a versatile cloud platform.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
            >
              Q. What are the services of AWS?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ minWidth: "90%", flexShrink: 0, textAlign: "left" }}
            >
              The services provided by AWS can be categorized into several key
              areas:
              <br />
              <ul>
                <li>Compute Services</li>
                <li>Storage Services</li>
                <li>Database Services</li>
                <li>Networking Services</li>
                <li>Security, Identity, and Compliance</li>
                <li>Machine Learning and AI Services</li>
                <li>Analytics and Big Data</li>
                <li>Internet of Things (IoT) Services</li>
                <li>Management Tools</li>
                <li>Application Integration</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
            >
              Q. Utilization of Amazon's Web Services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ minWidth: "90%", flexShrink: 0, textAlign: "left" }}
            >
              Amazon Web Services (AWS) is utilized by a diverse range of
              businesses, organizations, and individuals worldwide. Its cloud
              computing services offer a wide array of benefits that cater to
              various use cases
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
