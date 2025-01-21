import React from "react";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
} from "@/auth/socialAuth";

const SocialButtons = () => {
  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={signInWithGoogle}
        className="w-full py-2 bg-red-500 text-white rounded"
      >
        Entrar com Google
      </button>
      <button
        onClick={signInWithFacebook}
        className="w-full py-2 bg-blue-600 text-white rounded"
      >
        Entrar com Facebook
      </button>
      <button
        onClick={signInWithTwitter}
        className="w-full py-2 bg-blue-400 text-white rounded"
      >
        Entrar com Twitter
      </button>
    </div>
  );
};

export default SocialButtons;
