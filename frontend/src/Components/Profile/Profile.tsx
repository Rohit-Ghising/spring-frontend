import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Avatar, Box, Button, Tab } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store/store";
import { authById } from "../../Store/auth/Action";

export default function Profile() {
  const [tabValue, setTabValue] = useState("1");
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auth } = useSelector((store) => store);

  const handleFollowUser = () => {
    console.log("followed");
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 4) {
      console.log("likes");
    } else if (newValue == 1) {
      console.log("user tweet");
    }
  };
  const handleOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);
  useEffect(() => {
    dispatch(authById(id));
  }, [id]);
  return (
    <div>
      <section
        className={` bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer "
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {" "}
          {auth.findUser?.fullName}
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
            <h1 className="font-bold text-lg ">{auth.findUser?.fullName}</h1>
            {true && <img src="" className="ml-2 w-5 h-5" alt="" />}
          </div>
          <h1 className="text-gray-500">
            @{auth.findUser?.fullName.split(" ").join("_").toLowerCase()}
          </h1>
        </div>
        <div className="mt-2 space-y-3 ">
          <p className="">{auth.findUser?.bio}</p>
          <div className="py-1 flex space-x-5 ">
            <div className=" flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2 ">Educactipn</p>
            </div>
            <div className=" flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2 ">{auth.findUser?.location}</p>
            </div>
            <div className=" flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2 ">Joinied </p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>{auth.findUser?.following.length}</span>
              <span className="text-gray-500">follower</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>{auth.findUser?.followers.length}</span>
              <span className="text-gray-500">following</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 9].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="2">User Replies </TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
}
