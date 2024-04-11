export const Navbar = () => {
  return (
    <nav className="h-[65px]  flex  items-center px-[20px] py-[40px] bg-gradient-to-r from-slate-900 to-slate-700 gap-4">
      <div className="h-[50px] w-[50px] bg-[green] rounded-md  ">
        <img
          className="h-[100%] w-[100%]  "
          src="https://icons.veryicon.com/png/o/miscellaneous/unicons/video-109.png"
          alt=""
        />
      </div>
      <div className="text-[25px] text-[green]">Video app </div>
    </nav>
  );
};
