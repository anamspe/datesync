import { useAuth0 } from "@auth0/auth0-react";
import useDates from "../hooks/useDates";
import DateComponents from "../DateComponents";
import DashboardButtons from "../DashboardButtons";
import Divider from "@mui/material/Divider";

const DraftDates = () => {
  const { user } = useAuth0();
  const { datesByGroup, deleteDate, formatDateTime } = useDates("api/dates", {
    drafts: true,
    email: user.email
  });

  return (
    <>
      <h2 className="date-title">Dates</h2>
      {Object.keys(datesByGroup).length === 0 ? (
        <h5 className="no-date-message">No Drafts to display</h5>
      ) : (
        Object.keys(datesByGroup).map((dateId, index) => (
          <div key={index}>
            <div className="date-group">
              <div>
                <h4 className="date-title">Date #{dateId}</h4>
                <p>
                  Date & Time:{" "}
                   To be defined
                </p>
              </div>

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

export default DraftDates;
