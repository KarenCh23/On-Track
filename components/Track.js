export default function Track({track, chooseTrack}) {
  return (
    <div className="flex items-center justify-between space-x-20 cursor-default hover:bg-white/20 py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center">
        <img src={track.albumUrl} alt="" />
      </div>
    </div>
  );
}
