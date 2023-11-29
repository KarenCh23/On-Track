// "use client";
import { useState } from "react";
import Search from "./Search";
import { useSession } from "next-auth/react";

export default function Body({playlists, setPlaylists, sessionState}) {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
 const accessToken = sessionState;
//  console.log(accessToken);

  return (
    <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5">
      <Search search={search} setSearch={setSearch} />
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4"></div>
      <div className="bg-white p-10 flex flex-col items-center w-full">
        {playlists.map((playlist) => (
          <div key={playlist.id}>{playlist.name}</div>
        ))}
      </div>
    </section>
  );
}
