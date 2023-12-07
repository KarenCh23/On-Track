// "use client";
import { useEffect, useState } from "react";
import Search from "./Search";
import { useSession } from "next-auth/react";
import Poster from "./Poster";

export default function Body({
  playlists,
  sessionState,
  spotifyApi,
  chooseTrack,
}) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [musicGenres, setMusicGenres] = useState([]);
  const accessToken = sessionState;
  //  console.log(accessToken);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // Searching //
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [search, accessToken]);

  // console.log(searchResults);

  // New Releases //
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((res) => {
      setNewReleases(
        res.body.albums.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  console.log(newReleases);

  // Genres //
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.getAvailableGenreSeeds().then(
      function (data) {
        let genreSeeds = data.body.genres.slice(0, 6);
        setMusicGenres(genreSeeds);
        console.log(musicGenres);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken]);

  return (
    <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5">
      <Search search={search} setSearch={setSearch} />
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {searchResults.length === 0
          ? newReleases
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))
          : searchResults
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))}
      </div>

      <section className="flex gap-x-8 absolute min-w-full md:relative ml-6">
        {/* GENRES */}
        <div className="hidden xl:inline max-w-[270px]">
          <h2 className="text-white font-bold mb-3">Genres</h2>
          <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
            {musicGenres.map((genre) => (
              <div className="text-white" key={genre.id}>
                {genre}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="bg-white p-10 flex flex-col items-center w-full">
        {playlists.map((playlist) => (
          <div key={playlist.id}>{playlist.name}</div>
        ))}
      </div> */}
    </section>
  );
}
