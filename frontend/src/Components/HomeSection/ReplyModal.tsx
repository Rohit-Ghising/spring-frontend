import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import FmdGoodIcon from "@mui/icons-material/FmdGood";

import ImageIcon from "@mui/icons-material/Image";

import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createTweetReply } from "../../Store/Twit/Action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({ open, handleClose, item }) {
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");
  const dispatch = useDispatch();

  const handleClick = () => setOpen(true);

  const navigate = useNavigate();
  const handleDeleteTweet = () => {};
  const handleSubmit = (values) => {
    dispatch(createTweetReply(values));
    handleClose();
    console.log("suhd", values);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const formik = useFormik({
    initialValues: { content: "", image: "", tweetId: item?.id },
    onSubmit: handleSubmit,
  });
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10  `}>
            <div className="flex  space-x-5 ">
              <Avatar alt="username" src="" />

              <div className="w-full ">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is happening??"
                      className={` border-none outline-none text-xl bg-transparent`}
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500 ">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  {/* <div>
                <img src="" alt="" />
              </div> */}
                  <div className="flex justify-between items-center mt-5 ">
                    <div className="flex space-x-5 items-center ">
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer ">
                        <ImageIcon className="text-[#id9bg0]" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          width: "100%",
                          borderRadius: "20px",
                          py: "8px",
                          px: "20px",
                          bgcolor: "1e88e5",
                        }}
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
