import React from "react";

const UserContext = React.createContext({
    first_name: undefined,
    last_name: undefined,
    email: undefined,
});

export default UserContext;
