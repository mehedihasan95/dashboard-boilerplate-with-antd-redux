const isDev: boolean = process.env.NODE_ENV !== "development";

const dev: string = "http://192.168.0.234:5050/api/v1";
const prod: string =
  "https://restaurant-management-sass-server.restaurant360.online/api/v1";

export const baseUrl: string = isDev ? dev : prod;
