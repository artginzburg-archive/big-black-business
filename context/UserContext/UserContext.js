import { createContext } from "react";

const UserContext = createContext(null);

if (process.env.NODE_ENV !== "production") {
  UserContext.displayName = "UserContext";
}

export default UserContext;
