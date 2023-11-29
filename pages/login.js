import { signIn, useSession } from "next-auth/react";

export default function login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button
        className="bg-white"
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
      >
        Login with Spotify
      </button>
    </div>
  );
}
