import { useQueries, useQuery } from "@tanstack/react-query";
import ms from "ms";
import React from "react";

const getMasterData = () => {
  return Promise.all([
    new Promise((res, rej) => {
      setTimeout(() => {
        res(["Oncology", "ENT"]);
      }, 3000);
    }),
    new Promise((res, rej) => {
      setTimeout(() => {
        res(["Kansas", "California"]);
      }, 2000);
    }),
  ]);
};

export default function Page() {
  //   const { isLoading, data } = useQuery({
  //     queryKey: ["employeeformmasterdata"],
  //     queryFn: () => getMasterData(),
  //     staleTime: ms("10s"),
  //   });

  const [deptData, locationData] = useQueries({
    queries: [
      {
        queryKey: ["dept"],
        queryFn: () =>
          new Promise((res, rej) => {
            setTimeout(() => {
              res(["Oncology", "ENT"]);
            }, 3000);
          }),
      },
      {
        queryKey: ["location"],
        queryFn: () =>
          new Promise((res, rej) => {
            setTimeout(() => {
              res(["Kansas", "California"]);
            }, 2000);
          }),
      },
    ],
  });

  return (
    <div className="p-10">
      <form action="" className="flex gap-4">
        <input type="text" className="border border-black" />
        <select name="" id="" className="bg-gray-200 py-2 px-4 rounded-lg">
          <option>Select</option>
          {deptData.data &&
            deptData.data.map((d) => <option key={d}>{d}</option>)}
        </select>
        <select name="" id="" className="bg-gray-200 py-2 px-4 rounded-lg">
          <option>Select</option>
          {locationData.data &&
            locationData.data.map((d) => <option key={d}>{d}</option>)}
        </select>
      </form>
      {/* {deptData.isLoading || locationData.isLoading ? (
        <p>Loading Master Data...</p>
      ) : (
        <form action="" className="flex gap-4">
          <input type="text" className="border border-black" />
          <select name="" id="" className="bg-gray-200 py-2 px-4 rounded-lg">
            <option>Select</option>
            {deptData && deptData.data.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <select name="" id="" className="bg-gray-200 py-2 px-4 rounded-lg">
            <option>Select</option>
            {locationData && locationData.data.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </form>
      )} */}
    </div>
  );
}
