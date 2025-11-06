import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Profile() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleOpenProfileModel = () => {
    console.log("openprfile");
  };
  const handleFollowUser = () => {
    console.log("followed");
  };
  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer "
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {" "}
          code eiyh rohit
        </h1>
      </section>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2025/06/19/16/21/adventure-9669323_1280.jpg"
          className="w-[100%] h-[30rem] object-cover"
          alt=""
        />
      </section>
      <section className="pl-6 ">
        <div className="flex justify-between items-start my-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              className="rounded"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center ">
            <h1 className="font-bold text-lg ">hen cihbch</h1>
            {true && <img src="" className="ml-2 w-5 h-5" alt="" />}
          </div>
          <h1 className="text-gray-500">@bdchjbc</h1>
        </div>
        <div className="mt-2 space-y-3 ">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <div className="py-1 flex space-x-5 ">
            <div className=" flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2 ">Educactipn</p>
            </div>
            <div className=" flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2 ">Nepal</p>
            </div>
            <div className=" flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2 ">Joinied </p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>5876</span>
              <span className="text-gray-500">followrrw</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>5876</span>
              <span className="text-gray-500">following</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
