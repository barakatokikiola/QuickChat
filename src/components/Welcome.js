import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import welcomeimg  from '../img/welcome.svg';

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome md:flex md:flex-row-reverse mx-auto ">
      <div className="container">
      <img src={welcomeimg} alt="QuickChat logo" />
      </div>
    <div className="container my-auto py-auto">
      <h1 className="my-5 font-semibold text-3xl">Sign in to <span className="text-pink-700">QuickChat</span> with Google</h1>
    <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </div>
    </main>
  );
};

export default Welcome;
