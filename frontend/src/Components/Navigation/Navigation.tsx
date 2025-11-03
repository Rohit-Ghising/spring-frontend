import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="h-screen sticky top-0 ">
      <div>
        <div className="py-5 ">
          <svg className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr">
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
      </div>
    </div>
  );
}
