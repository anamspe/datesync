import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from 'react';
import SelectionAlert from '../SelectionAlert';
import EventAccordion from "../result-accordions/EventAccordion";
import EventsSelect from "../search-forms/EventsSelect";
import closeSymbol from "/src/client/assets/closeSymbol.svg";

export default function EventsModal({ cityString, onEventSelect }) {
  const [open, setOpen] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const [showAlert, setShowAlert] = useState(false)

  const isDisabled = !cityString;
  const handleClose = () => setOpen(false);

  const onEventsFetched = (fetchedData) => {
    setEventsData(fetchedData);
  };

  // This function will be called when "Add to Date" is clicked:
  const handleAddToDateClick = (event) => {
    onEventSelect(event);
    handleClose(); 
  };

  const handleButtonClick = (event) => {
    if(isDisabled) {
      setShowAlert(true);
    } else {
      setOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Search Events
      </Button>
      {showAlert && (
      <SelectionAlert 
        onClose={handleCloseAlert} 
        message="Please select a city first."
      />
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="search-modal">
          <div className="modal-top">
            <button className="close-button" onClick={handleClose}>
              <img src={closeSymbol} alt="close symbol" />
            </button>
            <Typography
              className="modal-title"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Search Events
            </Typography>
          </div>
          <EventsSelect onEventsFetched={onEventsFetched} cityString={cityString}/>
          <ul>
            {eventsData.map((event) => (
              <EventAccordion
                key={event.id}
                eventData={event}
                onAddToDate={() => handleAddToDateClick(event)}
              />
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
