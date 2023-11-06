import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  // ? Example 1: about the useContext
  // const { userName } = useContext(AppContext) || {};
  // ? Example 2 about the useQuery
  interface CatFactData {
    fact: string;
  }
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery<CatFactData>(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  if (isError) {
    return <h1>Sorry, there was an error!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  // ! Example 1: about the useContext
  // return <h1>This is the home page and user is {userName}</h1>;
  // ! Example 2: about the useQuery
  return (
    <div>
      <h1>
        This is the home page
        <p>{catData?.fact}</p>
      </h1>
      <button onClick={() => refetch()}>Update the data</button>
    </div>
  );
};
