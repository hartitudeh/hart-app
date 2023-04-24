import { AppContext } from "@/pages/_app";
import React, { useState } from "react";
// import Navbar from "../component/Navbar/Navbar";
import { useContext } from "react";

const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeProfile;
