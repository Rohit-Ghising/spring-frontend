import * as React from "react";
import Box from "@mui/material/Box";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";

import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  outline: "none",
  p: 4,
  borderRadius: 4,
};

export default function SubscriptionModal({ open, handleClose }) {
  // const [open, setOpen] = React.useState(false);
  const [plan, setPlan] = React.useState("Anually");
  // const handleOpen = () => setOpen(true);

  const features = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3 ">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10 ">
            <div className="w-[80%] space-y-10 ">
              <div className="p-5 rounded-md flex items-center bg-slate-400 justify-between shadow-lg ">
                <h1 className="text-xl pr-5 ">
                  Lorem ipsum, dolor sit amet consectetur elit. Ea nam, dolores
                  earum deleniti eos architecto?
                </h1>{" "}
                <img
                  className="w-2/4 h-24"
                  src="https://cdn.pixabay.com/photo/2025/02/14/22/12/hyena-9407501_1280.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between border rounded-full px-5 py-3 bg-gray-500 ">
                <div>
                  <span
                    onClick={() => setPlan("Anually")}
                    className={`${
                      plan === "Anually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Anually
                  </span>
                  <span className="text-green-500 text-sm ml-5 ">Save 12%</span>{" "}
                </div>
                <p
                  onClick={() => setPlan("Monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3 ">
                {features.map((item) => (
                  <div className="flex items-center space-x-5 ">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-center  bg-gray-900 text-white py-3 rounded-full">
                <span className="line-through italic">
                  <CurrencyYenIcon /> 75215
                </span>
                <span className="px-5 ">
                  <CurrencyYenIcon />
                  565/year
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
