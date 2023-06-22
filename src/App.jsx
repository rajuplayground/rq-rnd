import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Posts from "./Posts";
import { useState } from "react";

const getData = () => {
  return ["one", "two"];
};

const getDataP = () => {
  console.log("data function called");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["one", "two"]);
    }, ms("4s"));
  });
};

function App() {
  const [load, setLoad] = useState(false);
  const { isLoading, data } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
    staleTime: ms("20s"),
  });
  return (
    <>
      <h1 className="underline">Data</h1>
      <ul>{data && data.map((d) => <li key={d}>{d}</li>)}</ul>
      <button
        onClick={() => setLoad(!load)}
        className="bg-red-500 hovedr:bg-gray-300 rounded m-6 px-1 py-0.5 "
      >
        Load
      </button>
      {load && <Posts />}
    </>
  );
}

export default App;
