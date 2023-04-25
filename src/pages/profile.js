import React from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import ChangeProfile from "@/Component/ChangeProfile/ChangeProfile";
import { AppContext } from "./_app";

const Profile = () => {
  //   const { username } = useContext(AppContext);
  const { username } = useContext(AppContext);
  console.log("username", username);

  return (
    <div>
      <Navbar />
      <h2>This is the profile page and the username is: {username} </h2>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
