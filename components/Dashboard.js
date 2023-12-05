import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
// import Player from "./Player";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { playingTrackState } from "@/atoms/playerAtom";
import { useRecoilState } from "recoil";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});



function Dashboard({playlists, sessionState}) {

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
     };
  
    return (
      <main>
        <Sidebar />
        <Body 
        playlists={playlists} 
        sessionState={sessionState}
        spotifyApi={spotifyApi}
        chooseTrack={chooseTrack}
        />
        <Right />

      </main>
    );
  }
  
  export default Dashboard;