import Body from "./Body";
// import Player from "./Player";
import Right from "./Right";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi

function Dashboard({playlists, setPlaylists, sessionState}) {
  
    return (
      <main>
        <Sidebar />
        <Body playlists={playlists} setPlaylists={setPlaylists} sessionState={sessionState}/>
        <Right />

      </main>
    );
  }
  
  export default Dashboard;