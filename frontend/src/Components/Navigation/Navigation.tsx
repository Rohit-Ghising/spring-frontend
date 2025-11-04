import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
  };
  const navigate = useNavigate();
  return (
    <div className="h-screen sticky top-0 ">
      <div>
        <div className="py-5 ">
          <svg
            height="30"
            width="30"
            className="  r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"
          >
            <g>
              <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
            </g>
          </svg>
        </div>
        {/*  */}
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              onClick={() =>
                item.title == "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
              className=" cursor-pointer flex space-x-3 items-center   "
            >
              {item.icon}
              <p className=" text-xl ">{item.title}</p>
            </div>
          ))}
        </div>
        <div className=" py-10 ">
          <Button
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "1e88e5",
            }}
          >
            Tweet
          </Button>
        </div>
      </div>
      <div className=" flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar alt=" username" src="" />
          <div>
            <span>Rohit Ghising</span>
            <br />

            <span className="opacity-70 ">@codewithrohit</span>
          </div>

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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
