import { ImHeadphones } from "react-icons/im";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

export default function Track({ track, chooseTrack }) {
  return (
    <div className="flex items-center justify-between space-x-20 cursor-default hover:bg-white/20 py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center">
        <img
          src={track.albumUrl}
          alt="track cover"
          className="rounded-xl h-12 w-12 object-cover mr-3"
        />
        <div className="track-infos">
          <h4 className="text-white text-sm font-semibold truncate w-[450px]">
            {track.title}
          </h4>
          <p className="text-[rgb(179,179,179)] text-[13px] font-semibold group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>

      <div className=" track-icons md:ml-auto flex items-center space-x-2.5">
        <div className="text-white flex space-x-1 text-sm font-semibold">
          <ImHeadphones className="text-lg" />
          <h4>{track.popularity}</h4>
        </div>

        <div className="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40">
          <AiFillHeart className="text-xl ml-3"/>
        </div>
      </div>
    </div>
  );
}
