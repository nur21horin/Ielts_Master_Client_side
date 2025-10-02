import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const ShowVocabulary = () => {
  const users = useLoaderData();
  return (
    <div className="text-center mx-auto">
      <h2 className="text-2xl font-serif ">Vocabulary List</h2>
      <ul className="grid  grid-cols-[repeat(auto-fit,minmax(180px,1fr))]   gap-3 p-4 ">
        {users.map((user, index) => (
          <li
            key={index}
            className="border-2 border-gray-300 rounded-lg  transition hover:bg-amber-600 duration-200 p-4 text-center "
          >
            <div className=" text-2xl w-full h-[45px] flex justify-around  text-inline   ">
              <h2>{user.english}</h2>
              <div>{user.bengali}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mb-6">
        <NavLink
          to={"/vocabulary"}
          className="text-2xl ease-in-out transform hover:scale-105 text-center hover:bg-blue-700 transition duration-300 w-[400px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto py-4"
        >
          Add Vocabulary
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/vocabpage"
           className="text-2xl ease-in-out transform hover:scale-105 mb-4 text-center hover:bg-blue-700 transition duration-300 w-[400px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto py-4"
        >
          🔙 Back
        </NavLink>
      </div>
    </div>
  );
};

export default ShowVocabulary;
