import { playState, playingTrackState } from "@/atoms/playerAtom";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";

export default function Poster({ track, chooseTrack }) {
  // Playing Tracks States //
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);
    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div
      className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt="new release poster"
        className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />

      <div className="absolute bottom-10 insext-x-0 ml-4 flex items-center space-x-3.5">
        <div className="h-10 w-10 bg-[#1e1f20] rounded-full flex items-center justify-center group-hover:bg-[#b5bbb7] flex-shrink-0">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-xl" />
          ) : (
            <BsFillPlayFill className="text-xl ml-[1px]" />
          )}
        </div>
      </div>
    </div>
  );
}
