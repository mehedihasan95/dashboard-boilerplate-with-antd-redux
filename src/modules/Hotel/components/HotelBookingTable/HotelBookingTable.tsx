import React from "react";
import { useGetHotelBookingListQuery } from "../../api/hotelEndpoint";
import Table, { TableActionDropdown } from "../../../../common/Antd/Table";
import { HotelTypes } from "../../types/hotelTypes";
import EditButton from "../../../../common/Antd/Button/EditButton";
import ViewButton from "../../../../common/Antd/Button/ViewButton";
import DeleteButton from "../../../../common/Antd/Button/DeleteButton";
import { FilterDataTypes } from "../../pages/HotelBookingList";
import AvatarWithLabel from "../../../../common/AvatarWithLabel/AvatarWithLabel";

interface Props {
  filters: FilterDataTypes;
}
const HotelBookingTable: React.FC<Props> = ({ filters }) => {
  const { data, isLoading, isFetching, refetch } =
    useGetHotelBookingListQuery(filters);

  return (
    <React.Fragment>
      <Table
        rowKey={"id"}
        total={data?.total}
        dataSource={data?.data || []}
        loading={isLoading || isFetching}
        refetch={refetch}
        columns={[
          {
            title: "Hotel",
            render: (_, { agency_logo, agency_name }) => (
              <AvatarWithLabel image={agency_logo} name={agency_name} />
            ),
          },
          {
            title: "Booking ID",
            dataIndex: "booking_id",
          },
          {
            title: "Booking Date",
            dataIndex: "booking_date",
          },
          {
            title: "Checkin",
            dataIndex: "checkin",
          },
          {
            title: "Checkout",
            dataIndex: "checkout",
          },
          {
            title: "Holder Title",
            dataIndex: "holder_title",
          },

          TableActionDropdown<HotelTypes>({
            content: (record) => [
              <EditButton />,
              <ViewButton pathname="" />,
              <DeleteButton />,
            ],
          }),
        ]}
      />
    </React.Fragment>
  );
};

export default HotelBookingTable;
