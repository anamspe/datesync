import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RestaurantSelect from "../search-forms/RestaurantSelect";
import RestaurantAccordion from "../result-accordions/RestaurantAccordion";
import closeSymbol from "/src/client/assets/closeSymbol.svg";

const restaurants = [
  {
    category_id: 2,
    component_id: 7,
    name: "Sushi Sensation",
    address: "456 King St, Toronto",
    rating: 4.5,
    price_level: 3,
    cuisine_type: "Japanese",
    opening_hours: "12:00:00",
    closing_hours: "22:00:00",
    website_url: "http://sushisensation.com",
    photo_url:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category_id: 2,
    component_id: 14,
    name: "Burger Bliss",
    address: "101 Bay St, Toronto",
    rating: 2.4,
    price_level: 2,
    cuisine_type: "American",
    opening_hours: "10:00:00",
    closing_hours: "23:00:00",
    website_url: "http://burgerbliss.com",
    photo_url:
      "data:image/jpeg;base64,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",
  },
  {
    category_id: 2,
    component_id: 27,
    name: "Sushi Sensation",
    address: "456 King St, Toronto",
    rating: 4,
    price_level: 3,
    cuisine_type: "Japanese",
    opening_hours: "12:00:00",
    closing_hours: "22:00:00",
    website_url: "http://sushisensation.com",
    photo_url:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category_id: 2,
    component_id: 24,
    name: "Burger Bliss",
    address: "101 Bay St, Toronto",
    rating: 4,
    price_level: 2,
    cuisine_type: "American",
    opening_hours: "10:00:00",
    closing_hours: "23:00:00",
    website_url: "http://burgerbliss.com",
    photo_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII2IsqYEpmIE1jCfJiWswkau87IcP5cERYg&usqp=CAU"
  },
];

export default function RestaurantsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Search Restaurants</Button>
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
              Search Restaurants
            </Typography>
          </div>
          <RestaurantSelect />
          <ul>
            {restaurants.map((restaurant) => (
              <RestaurantAccordion
                key={restaurant.component_id}
                restaurant={restaurant}
              />
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
