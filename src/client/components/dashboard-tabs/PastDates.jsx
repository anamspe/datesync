import { useAuth0 } from "@auth0/auth0-react";
import useDates from "../hooks/useDates";
import DateComponents from "../DateComponents";
import DashboardButtons from "../DashboardButtons";
import Divider from "@mui/material/Divider";

const PastDates = () => {
  const { user } = useAuth0();

  const { datesByGroup, deleteDate, formatDateTime } = useDates("api/dates", {
    pastDates: true,
    email: user.email
  });

  const dates = Object.keys(datesByGroup);
  const descOrderedDates = dates.reverse();

  return (
    <>
      {descOrderedDates.length === 0 ? (
        <h5 className="no-date-message">No Past Dates to display</h5>
      ) : (
        descOrderedDates.map((dateId, index) => (
            <div className="date-group">
              <h4 className="date-title">
                  When:{" "}
                  {datesByGroup[dateId][0].scheduled_date
                    ? formatDateTime(datesByGroup[dateId][0].scheduled_date)
                    : " To Be Defined"}
              </h4>

              <div key={index} className="date-group-components">
              <Divider
                className="divider"
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <DateComponents key={dateId} dates={datesByGroup[dateId]} />
              <Divider
                className="divider"
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <DashboardButtons
                dateInfo={datesByGroup[dateId][0]}
                deleteDate={deleteDate}
              />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default PastDates;
