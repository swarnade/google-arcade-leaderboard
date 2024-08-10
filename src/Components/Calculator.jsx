import React from "react";
import Table from "./Table";
import Details from "./Details";
import "./Design.css"
export default function Calculator() {
  return (
    <div className="h-screen w-screen">
      <h1 className="text-center Font text-4xl p-2 text-green-500">Google Cloud Arcade Leaderboard 2024</h1>
      <div className=" shadow-md sm:rounded-lg w-screen overflow-x-hidden h-4/5 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  overflow-scroll">
              <tr>
              <th scope="col" className="px-6 py-3">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Profile Link
                </th>
                <th scope="col" className="px-6 py-3">
                  Milestone
                </th>
                <th scope="col" className="px-6 py-3">
                  Skill Badge
                </th>
                <th scope="col" className="px-6 py-3">
                  Arcade Games
                </th>
                <th scope="col" className="px-6 py-3">
                  Arcade Trivia
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Point's
                </th>
              </tr>
            </thead>
            <tbody>
              {Details.map((data) => {
                return <Table data={data} />;
              })}
            </tbody>
          </table>
      </div>
      <p className="Font text-center text-2xl mb-2 text-red-500">This Leaderboard Is Developed By Swarnadeep Saha Poddar & Prerna Pal</p>
      <p className="Font text-center text-2xl text-blue-500"> Facilator Code:- GCAF24-IN-VQ7-KWJ | Last Updated:- 10/08/2004 14:00:00 </p>
    </div>
  );
}