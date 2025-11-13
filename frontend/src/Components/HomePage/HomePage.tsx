// import { Grid } from "@mui/material";
// export default function HomePage() {
//   return (
//     <Grid container xs={12} className="px-5 lg:px-36 justify-between ">
//       <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
//         Left PArt
//       </Grid>
//       <Grid item xs={12} lg={6} className="hidden lg:block w-full relative">
//         {" "}
//         <p className="text-center ">MIddle Part</p>
//       </Grid>

//       <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
//         {" "}
//         <p className="text-center ">Right Part</p>
//       </Grid>
//     </Grid>
//   );
// }
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TweetDetails from "../TweetDetails/TweetDetails";
import Authentication from "../Authentication/Authentication";

export default function HomePage() {
  return (
    <Grid container className="px-5 lg:px-36 justify-between">
      {/* Left Part */}
      <Grid item xs={12} lg={2.5} className="hidden lg:block relative">
        <Navigation />
      </Grid>

      {/* Middle Part */}
      <Grid
        item
        xs={12}
        lg={6}
        className=" px-5 lg:px-9 hidden lg:block relative"
      >
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/home" element={<HomeSection />}></Route>

          <Route path="/profile/:id" element={<Profile />} />
          <Route path="tweet/:id" element={<TweetDetails />} />
        </Routes>
      </Grid>

      {/* Right Part */}
      <Grid item xs={12} lg={3} className="hidden lg:block relative">
        <RightPart />
      </Grid>
    </Grid>
  );
}
