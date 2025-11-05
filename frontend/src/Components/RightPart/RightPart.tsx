import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
export default function RightPart() {
  const handleChangeTheme = () => {
    console.log("theme changed");
  };
  return (
    <div className="py-5 sticky top-0">
      <div className="relative flex items-center ">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12 "
        />
        <div className="absolute top-0 left-0 pl-3 pt-3 ">
          <SearchIcon className="text-gray-500 " />
          <Brightness4Icon
            onClick={handleChangeTheme}
            className="ml-3 cursor-pointer "
          />
        </div>
        <section className="my-5 ">
          <h1 className="text-xl font-bold ">Get Verified</h1>
          <h1 className="font-bold my-2 ">Subscribe to unlock new Features</h1>
          <Button
            variant="contained"
            sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
          >
            Get Verified
          </Button>
        </section>
        <section className="mt-7 space-y-5 ">
          <h1 className="font-bold text-xl py-1">What's happening?</h1>
          <div>
            <p className="text-sm">Lorem ipsum, dolor sit amet</p>
            <p className="font-bold ">amet consectetur adipisicing</p>
          </div>
          {[1, 1, 1].map((item) => (
            <div className="justify-between w-full ">
              <div>
                <p>Lorem ipsum, dolor sit amet </p>
                <p className="font-bold ">#hdcvv</p>
                <p>3.34k tweets</p>
              </div>
              <MoreHorizIcon />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
