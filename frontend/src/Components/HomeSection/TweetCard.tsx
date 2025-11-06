import RepeatIcon from "@mui/icons-material/Repeat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReplyModal from "./ReplyModal";

export default function TweetCard() {
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleLogout = () => {
  //   handleClose();
  // };
  const handleDeleteTweet = () => {
    console.log("tweetseleted");
  };
  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };
  const handleReplyModel = () => {
    "repliesd";
  };
  const navigate = useNavigate();
  const handleLiketweet = () => {
    console.log("liked");
  };
  return (
    <>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You Retweet</p>
      </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`profile/${6}`)}
          alt="username"
          src=""
          className="cursor-pointer"
        />
        <div className="w-full ">
          <div className="flex justify-between items-center ">
            <div className="flex cursor-pointer items-center space-x-2 ">
              <span className="font-semibold "> Code with rohit</span>
              <span className="text-gray-600 ">@hjdbc jcn . 2m</span>
              <img className="ml-2 w-5 h-5" src="" alt="" />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2 ">
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/tweet/${8}`)}
            >
              <p className="mb-2 p-0">Nice image</p>
              <img
                src="https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center ">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer "
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
                <div
                  className={`${
                    true ? "text-pink-600 " : "text-gray-600"
                  } space-x-3 flex items-center `}
                >
                  <RepeatIcon
                    className="cursor-pointer"
                    onClick={handleCreateRetweet}
                  />
                  <p>54</p>
                </div>
                {/*  */}
                <div
                  className={`${
                    true ? "text-pink-600 " : "text-gray-600"
                  } space-x-3 flex items-center `}
                >
                  {true ? (
                    <FavoriteIcon
                      className="cursor-pointer"
                      onClick={handleLiketweet}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className="cursor-pointer "
                      onClick={handleLiketweet}
                    />
                  )}
                  <p>54</p>
                </div>
                <div className="space-x-3 flex items-center text-gray-600">
                  <BarChartIcon
                    className="cursor-pointer "
                    onClick={handleReplyModel}
                  />
                  <p>43</p>
                </div>
                <div className="space-x-3 flex items-center text-gray-600">
                  <FileUploadIcon
                    className="cursor-pointer "
                    onClick={handleReplyModel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </>
  );
}
