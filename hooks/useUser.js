import { useUser as useUserContext } from "../context/UserContext";

export default function useUser() {
  const user = useUserContext();
  return user;
}
