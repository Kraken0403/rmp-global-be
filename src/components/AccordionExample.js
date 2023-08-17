import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccordionExample.scss'

export default function BasicAccordion() {
  return (
    <div className="custom-accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Collaboration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Whether it is continuously interacting with our clients or developing a conducive atmosphere that empowers collaboration among our team members, we firmly believe that working together is the best way forward!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Creativity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are continuously striving to serve our clients better, helping us approach their problems with an innovative approach! We blend in technology and years of experience to develop creative and effective solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Customer-centricity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are a completely customer-driven organization. We firmly believe that every customer is unique and has diverse needs, leading us to develop a customized approach that creates better results!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Consistency</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By perfecting our existing knowledge and adopting new technologies, we aim to deliver the highest standards of services on the most regular and consistent basis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dedicated Team</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Dedicated Team whose goal is to cater to you and exclusively you
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}