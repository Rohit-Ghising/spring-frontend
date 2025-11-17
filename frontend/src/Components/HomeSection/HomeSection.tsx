import { Avatar, Button } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import { useEffect, useState } from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";
import { getAllTweets } from "../../Store/Twit/Action";
import { useDispatch, useSelector } from "react-redux";
import { uploadToCloudinary } from "../../config/UploadToCloudinary";
const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

export default function HomeSection() {
  const dispatch = useDispatch();
  const { twit } = useSelector((store) => store);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = async (event) => {
    setUploadingImage(true);
    const imgUrl = await uploadToCloudinary(event.target.files[0]);
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  useEffect(() => {
    dispatch(getAllTweets());
  }, [twit.like, twit.retwit]);
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Homw</h1>
      </section>
      <section className={`pb-10  `}>
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
                  <span className="text-red-500 ">{formik.errors.content}</span>
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

            <div>
              {selectedImage && <img src={selectedImage} alt="loading" />}
            </div>
          </div>
        </div>
      </section>
      <section>
        {twit.twits.map((item) => (
          <TweetCard item={item} />
        ))}
      </section>
    </div>
  );
}
