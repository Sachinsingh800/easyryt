import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from "./ClientsAccordion.module.css"

export default function ClientsAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={style.main}>
        <h1>Frequently Asked Questions</h1>
        <div className={style.container}>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
          Q. What are the industries that INT. mainly works with?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
                <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
            Q. What is the project management style of INT.?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
             <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
             Q. How much do I need to pay for availing the services of INT.?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
         <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
          Q. Does INT. provide any project timelines??
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{ width: '100%', flexShrink: 0,textAlign:"left" }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
