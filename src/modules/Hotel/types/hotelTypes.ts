export type HotelTypes = {
  id: number;
  booking_id: string;
  booking_date: string;
  checkin: string;
  checkout: string;
  status: string;
  finalized: boolean;
  modified_booking_id: string;
  holder_title: string;
  holder_name: string;
  holder_surname: string;
  holder_email: string;
  hotel_name: string;
  country_name: string;
  city_name: string;
  booking_type: string;
  booking_amount: string;
  remarks: string;
  booking_amount_with_commission: string;
  booking_reference: string;
  booking_info: {
    booking_date: string;
    booking_id: string;
    booking_reference: string;
    booking_status: string;
    booking_type: string;
    checkin: string;
    checkout: string;
    currency: string;
    grn_booking_status: string;
    holder: {
      email: string;
      name: string;
      phone_number: string;
      surname: string;
      title: string;
    };
    hotel: {
      address: string;
      booking_items: Array<{
        boarding_details: Array<string>;
        cancellation_policy: {
          amount_type: string;
          cancel_by_date: string;
          details: Array<{
            currency: string;
            flat_fee: number;
            from: string;
          }>;
          no_show_fee: {
            amount_type: string;
            currency: string;
            flat_fee: number;
          };
          under_cancellation: boolean;
        };
        currency: string;
        includes_boarding: boolean;
        non_refundable: boolean;
        price: number;
        rate_comments: {
          comments: string;
          pax_comments: string;
        };
        rate_key: string;
        room_code: string;
        rooms: Array<{
          description: string;
          no_of_adults: number;
          no_of_children: number;
          no_of_rooms: number;
          room_reference: string;
          room_type: string;
        }>;
        agency_price_with_commission: number;
      }>;
      category: number;
      city_code: string;
      country_code: string;
      description: string;
      email: string;
      fax: string;
      geolocation: {
        latitude: string;
        longitude: string;
      };
      hotel_code: string;
      image: string;
      name: string;
      paxes: Array<{
        name: string;
        pax_id: number;
        surname: string;
        type: string;
      }>;
      phone_number: string;
      url: string;
    };
    nationality: string;
    non_refundable: boolean;
    payment_status: string;
    payment_type: string;
    price: {
      breakdown: {
        net: Array<{
          amount: number;
          amount_type: string;
          currency: string;
          included: boolean;
          name: string;
        }>;
      };
      total: number;
      dm_total: number;
    };
    search_id: string;
    supports_amendment: boolean;
    supports_cancellation: boolean;
    voucher_issue_date: string;
  };
  agency_id: number;
  agency_name: string;
  agency_logo: string;
};
