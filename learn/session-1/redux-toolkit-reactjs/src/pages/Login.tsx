import { useState } from "react";
import { login, logout, RootState } from "../store.ts";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const [newUserName, setNewUserName] = useState<string>("");
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.value.userName);
  return (
    <h1>
      This is the login page and user name is: {userName}
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewUserName(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ userName: newUserName }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </h1>
  );
};
