import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }

    });
  }
    , []);

  return (
    <div className="absolute top-0 left-0 right-0  px-8  z-10 flex justify-between bg-gradient-to-b from-black">
      <img
        className="w-35 h-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex justify-center items-center gap-2">
          <img className=' w-8 h-8 rounded-lg' alt='user avatar' src='https://icon-library.com/images/netflix-icon-transparent/netflix-icon-transparent-29.jpg' />
          <span className="text-white">{user.displayName}</span> {/* Display user's name */}
          <button onClick={handleSignOut} className="font-bold text-white hover:text-black">(Sign-Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;

