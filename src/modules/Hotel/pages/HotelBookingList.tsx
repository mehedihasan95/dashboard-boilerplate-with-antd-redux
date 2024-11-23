import React from "react";
import Container from "../../../common/Container/Container";
import HotelBookingTable from "../components/HotelBookingTable/HotelBookingTable";
import useQueryParams from "../../../hooks/useQueryParams";
import { DatePicker } from "antd";
import Select from "../../../common/Antd/Select";
import dayjs from "dayjs";

export type FilterDataTypes = Partial<{
  start_date: string;
  to_date: string;
  booking_type: string;
}>;

const HotelBookingList: React.FC = () => {
  const [filterData, setFilterData] = React.useState<FilterDataTypes>({});
  const filters = useQueryParams<FilterDataTypes>();

  console.log(filters);

  return (
    <React.Fragment>
      <Container
        title="Hotel Booking List"
        content={<HotelBookingTable filters={filters} />}
        filterData={filterData}
        additionalContent={[
          <DatePicker.RangePicker
            value={[dayjs(filters.start_date), dayjs(filters.to_date)]}
            onChange={(_, dataString) =>
              setFilterData((prev) => ({
                ...prev,
                start_date: dataString[0],
                to_date: dataString[1],
              }))
            }
          />,
          <Select
            value={filterData.booking_type}
            onChange={(value) =>
              setFilterData((prev) => ({ ...prev, booking_type: value }))
            }
            style={{ width: "100%" }}
            options={[
              { value: "B", label: "Booked" },
              { value: "C", label: "Cancelled" },
            ]}
          />,
        ]}
      />
    </React.Fragment>
  );
};

export default HotelBookingList;
