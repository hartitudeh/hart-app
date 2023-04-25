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



// Code testing goes here
const App = () => {
  const [active, setActive] = useState(0);
  const array = [1, 2, 3];
  return (
    <main>
      {array.map((el, i) => (
        <DivComponent
          key={i}
          n={el}
          onClick={() => setActive(i)}
          active={i === active}
        />
      ))}
    </main>
  );
};
const MyDiv = styled.div`
  background-color: ${(props) => (props.active ? "blue" : "transparent")};
  border: ${(props) => (props.active ? "1px solid red" : "1px solid black")};
`;
const DivComponent = (props) => {
  const { n, active } = props;
  return <MyDiv active={active}>{n}</MyDiv>;
};

export default App;


