import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ms from "ms";

const secondFunction = () => {
  console.log("data function called 2");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["three", "four"]);
    }, ms("5s"));
  });
};

export default function Posts() {
  const { isLoading, data } = useQuery({
    queryKey: ["data"],
    queryFn: secondFunction,
    staleTime: ms("20s"),
  });

  return (
    <>
      <div>Posts</div>

      <ul>{data && data.map((d) => <li key={d}>{d}</li>)}</ul>
    </>
  );
}
