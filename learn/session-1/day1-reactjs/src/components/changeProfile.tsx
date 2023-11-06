import { useContext, useState } from "react";
import { AppContext } from "../App";
export const ChangeProfile = () => {
  const { setUserName } = useContext(AppContext) || { setUserName: () => {} };
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUserName);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};
