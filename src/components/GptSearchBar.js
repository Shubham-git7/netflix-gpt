import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector ((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 rounded-xl bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-9 p-2 m-4 rounded-lg text-black"
        />
        <button className="bg-red-700 hover:bg-red-900 py-2 m-4 px-4 col-span-3 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
