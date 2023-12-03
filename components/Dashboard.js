import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
// import Player from "./Player";
import Right from "./Right";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});


function Dashboard({playlists, sessionState}) {
  
    return (
      <main>
        <Sidebar />
        <Body 
        playlists={playlists} 
        sessionState={sessionState}
        spotifyApi={spotifyApi}
        />
        <Right />

      </main>
    );
  }
  
  export default Dashboard;