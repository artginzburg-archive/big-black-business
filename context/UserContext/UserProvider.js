import { createElement } from "react";
import UserContext from "./UserContext";
import useUser from "./useUser";

export default function UserProvider(props) {
  const { children, user: localUser } = props;
  const user = useUser() || localUser;
  return createElement(UserContext.Provider, {
    value: user,
  }, children);
}
