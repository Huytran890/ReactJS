import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/changeProfile";
export const Contact = () => {
  const { userName } = useContext(AppContext) || {};
  return (
    <div>
      This is the contact page and user name is {userName}
      <ChangeProfile />
    </div>
  );
};
