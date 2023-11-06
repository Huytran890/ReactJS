import { useSelector } from "react-redux";
import { RootState } from "../store";
export const Home = () => {
  const userName = useSelector((state: RootState) => state.user.value.userName);
  return <h1>This is home page and user name is {userName}</h1>;
};
