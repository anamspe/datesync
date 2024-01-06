import { useEffect, useState } from "react";
import "../styles/Dashboard.scss";
import axios from "axios";
import DateComponents from "./DateComponents";

const AllDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get("/api/dates").then((res) => {
      console.log(res.data);
      setDates(res.data);
    });
  }, []);

  const datesByGroup = {};
  dates.forEach((date) => {
    const dateId = date.date_id;
    if (!datesByGroup[dateId]) {
      datesByGroup[dateId] = [];
    }
    datesByGroup[dateId].push(date);
  });

  return (
    <>
      <h2 className="date-title">Dates</h2>
      {Object.keys(datesByGroup).map((dateId, index) => (
        <div key={index}>
          <h4 className="date-title">Date ID #{dateId}</h4>
          <DateComponents key={dateId} dates={datesByGroup[dateId]} />
        </div>
      ))}
    </>
  );
};

export default AllDates;
