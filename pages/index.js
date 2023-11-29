import Image from "next/image";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [sessionState, setSessionState] = useState("");
  const [playlists, setPlaylists] = useState([]);
  

  useEffect(() => {
    async function sessionToken() {
      if (session && session.accessToken) {
        setSessionState(session.accessToken);
        const response = await fetch(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const data = await response.json();
        setPlaylists(data.items);
      }
    }
    sessionToken();
  }, [session]);

  return (
    <div className="">
      <Head>
        <title>On Track - Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-white p-7">access token: {sessionState}</div>
      {/* <div className="bg-white p-10 flex flex-col items-center w-full">
        {playlists.map((playlist) => (
          <div key={playlist.id}>{playlist.name}</div>
        ))}
      </div> */}

      <Dashboard playlists={playlists} setPlaylists={setPlaylists} sessionState={sessionState} />
    </div>
  );
}
