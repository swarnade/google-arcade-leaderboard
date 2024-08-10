import React from "react";
export default function Table({data}) {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{data.Serial}</td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.Name}</td>
        <td className="px-6 py-4">{data.Profile}</td>
        <td className="px-6 py-4">{data.Milestone}</td>
        <td className="px-6 py-4">{data.SkillBadge}</td>
        <td className="px-6 py-4">{data.ArcadeGames}</td>
        <td className="px-6 py-4">{data.ArcadeTrivia}</td>
        <td className="px-6 py-4">{data.Points}</td>
      </tr>
    </>
  );
}
