import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import { genAI } from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    let gptMovies = [];
    try {
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      const getQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query " +
        searchText.current.value +
        ". Only give me the names of 5 movies, use commas to separate the movie names, like the example result given ahead: sholey, gadar...";
      const prompt = getQuery;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text(); // Await the text() method correctly

      gptMovies = text.split(",").map((movie) => movie.trim()); // Assign to the outer gptMovies variable
      console.log(gptMovies);
    } catch (error) {
      console.error("Error generating content:", error);
    }

    if (gptMovies.length > 0) {
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 rounded-xl bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-9 p-2 m-4 rounded-lg text-black"
        />
        <button
          className="bg-red-700 hover:bg-red-900 py-2 m-4 px-4 col-span-3 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

