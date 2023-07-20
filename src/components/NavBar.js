import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar bg-white text-pink-700 shadow-md">
      <h1 className="text-2xl font-medium">QuickChat</h1>
      {user ? (
        <button onClick={signOut} className="bg-pink-100 rounded-full py-2 px-3 text-sm hover:bg-red-700 hover:text-white" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
