import React from "react";

const CustomerContext = React.createContext({
  salesperson: undefined,
  customer1: undefined,
  customer2: undefined,
  address1: undefined,
  address2: undefined,
  city: undefined,
  state: undefined,
  zipcode: undefined,
  phone: undefined,
  email: undefined,
});

export default CustomerContext;
