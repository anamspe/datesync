import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OpenInBrowser from "../../assets/open_in_browser.svg";

export default function ActivitiesAccordion({ activity, onAddToDate }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="result">
      <Accordion
        expanded={expanded === activity.id}
        onChange={handleChange(activity.id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${activity.id}-content`}
          id={`${activity.id}-header`}
        >
          <div className="result-card">
            <div className="card-mobile">
              <div>
                <img className="result-img" src={activity.thumbnail} alt={activity.title} />
              </div>
              <div className="info">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </div>
            <div>
              <div className="actions">
              <button onClick={() => onAddToDate(activity)}>
                  <AddCircleOutlineIcon className="add-to-date-icon"/>
                  Add to Date
                </button>
                <a href={activity.website} target="_blank">
                  <button>
                    <img className="open-in-browser-icon" src={OpenInBrowser} alt="Visit Website" />
                    Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {activity.title} -- {activity.address}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
