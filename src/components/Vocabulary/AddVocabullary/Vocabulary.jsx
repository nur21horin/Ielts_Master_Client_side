import React from "react";
import { NavLink, useLoaderData } from "react-router";

const Vocabulary = () => {
  const handleAddWord = (event) => {
    event.preventDefault();
    const form = event.target;
    const word = form.text.value;
    const meaning = form.bengalitext.value;
    const user = { word, meaning };
    console.log(user);
    form.reset();

    fetch("https://ielts-master-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Successfully added your word");
          form.reset();
        }
      });
  };

  return (
    <div className="text-center flex-wrap flex flex-col items-center overflow-x-auto gap-y-4 justify-center h-auto w-full">
      <h1 className="text-1xl font-serif mt-3.5">
        You can add your favourite words with meaning
      </h1>

      <form className="items-center justify-center " onSubmit={handleAddWord}>
        <h1 className="text-2xl text-left font-semibold font-serif mb-1.5 ">
          English word
        </h1>
        <input
          type="text"
          name="text"
          placeholder="Enter your word"
          id=""
          className="bg-amber-50 ease-in-out transform hover:scale-105 text-opacity-[1] mb-[20px] text-2xl w-[550px] text-black rounded-lg "
        />
        <br />
        <h1 className="text-2xl font-semibold font-serif text-left mb-1.5">
          Bengali meaning
        </h1>
        <input
          type="text"
          name="bengalitext"
          placeholder="Meaning of the given word"
          id=""
          className="bg-amber-50 ease-in-out transform hover:scale-105 placeholder-opacity-[0.01] placeholder-gray-500 text-2xl w-[550px] text-black rounded-lg "
        />
        <br />
        <input
          type="submit"
          value="Enter your word"
          className="text-2xl ease-in-out transform hover:scale-105 hover:bg-blue-700 transition duration-300 w-full font-serif bg-emerald-900 rounded-lg mt-4 h-auto "
        />
      </form>
      <NavLink
        to={"/showvocab"}
        className="text-2xl ease-in-out transform hover:scale-105 hover:bg-blue-700 transition duration-300 w-[550px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto"
      >
        Show Vocabulary
      </NavLink>

      <div className="flex justify-center">
        <NavLink
          to="/vocabpage"
          className="text-2xl ease-in-out transform hover:scale-105 hover:bg-blue-700 transition duration-300 w-[550px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto"
        >
          🔙 Back
        </NavLink>
      </div>
    </div>
  );
};

export default Vocabulary;
