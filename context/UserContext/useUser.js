import { useContext, useDebugValue } from "react";
import UserContext from "./UserContext";

export default function useUser() {
  const user = useContext(UserContext);

  if (process.env.NODE_ENV !== "production") {
    useDebugValue(user);
  }

  return user;
}
