import React from "react";
import Container from "../../../common/Container/Container";
import FlightBookingTable from "../components/FlightBookingTable/FlightBookingTable";

const FlightBookingList: React.FC = () => {
  return (
    <React.Fragment>
      <Container title="Flight booking list" content={<FlightBookingTable />} />
    </React.Fragment>
  );
};

export default FlightBookingList;
