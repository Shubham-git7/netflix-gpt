import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    //toggle using redux
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute top-0 left-0 right-0  px-8  z-10 flex justify-between bg-gradient-to-b from-black">
      <img className="w-35 h-20" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex justify-center items-center gap-2">
        { showGptSearch && <select
            className="bg-black mr-3 hover:bg-gray-800 border-none rounded-md text-white p-1"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className=" text-white font-bold py-0.5  px-3 mr-4 border-b-4 border-blue-700 hover:border-blue-400 rounded-2xl"
            onClick={handleGptSearchClick}
          >
           {showGptSearch ? "Homepage" : "GPT-Search" }
          </button>
          <img
            className=" w-8 h-8 rounded-lg"
            alt="user avatar"
            src="https://icon-library.com/images/netflix-icon-transparent/netflix-icon-transparent-29.jpg"
          />
          <span className="text-white">{user.displayName}</span>{" "}
          {/* Display user's name */}
          <button
            onClick={handleSignOut}
            className="font-bold text-white hover:text-black"
          >
            (Sign-Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
