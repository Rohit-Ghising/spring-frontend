import { Button, Grid } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import AuthModal from "./AuthModel";
import { useState } from "react";

function Authentication() {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);

  return (
    <div>
      <Grid className="overflow-y-hidden " container>
        <Grid className="hidden lg:block " item lg={7}>
          <img
            src="https://cdn.pixabay.com/photo/2014/04/03/11/53/twitter-312464_1280.png "
            alt=""
            className="h-screen w-full"
          />
          <div className="absolute top-[26%] left-[19%]">
            <svg
              height="300"
              width="300"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"
            >
              <g>
                <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
              </g>
            </svg>
          </div>
        </Grid>
        <Grid className="px-10 " lg={5} xs={12}>
          <h1 className="font-bold text-7xl mt-10">Happening Now</h1>
          <h1 className="font-bold text-3xl py-16">Join Twitter Today</h1>
          <div className="w-[60%]">
            <div className="w-full">
              <GoogleLogin
                width={330}
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />

              <p className="py-5 text-center ">OR</p>
              <Button
                onClick={handleOpenAuthModal}
                fullWidth
                sx={{ borderRadius: "29px", py: "7px" }}
                variant="contained"
                size="large"
              >
                Create Account
              </Button>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                alias placeat eos! Ea, rerum iste.
              </p>
              <div className="mt-10">
                <h1 className="font-bold text-xl mb-5">Already have account</h1>
                <Button
                  fullWidth
                  sx={{ borderRadius: "29px", py: "7px" }}
                  variant="outlined"
                  size="large"
                  onClick={handleOpenAuthModal}
                >
                  Login Account
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div>
  );
}

export default Authentication;
