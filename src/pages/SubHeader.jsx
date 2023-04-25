import { useState } from "react";
import { FaPassport, FaPlaneDeparture } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import styled from "styled-components";
import FlightCheck from "./FlightCheck";

const SubHeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97%;
  box-shadow: 4px 14px 28px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 0px 30px;
  height: fit-content;
  margin: 0 auto;
  //   background-color: #f4f6fc;
  background: crimson;
  margin-bottom: 20px;
  position: absolute;
  z-index: 9;
  top: 108%;
  transform: translate(-50%, -50%);
  left: 50%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  // max-width: 1200px;
  // height: 100vh;
  // background-color: #f4f6fc;
  padding: 10px 0px 0px 0px;
  position: relative;
  top: -83px;
  // z-index: 999;
`;

const TopSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 0px 0px 0px;
  position: relative;
  // z-index: 999;
`;
const LeftTopSec = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;

  button {
    //   background-color: transparent;
    //   border: 1px solid #8b3eea;
    border-radius: 5px;
    padding: 6px 20px;
    font-size: 16px;
    width: 110px;
    font-weight: 600;
    //   color: #fff;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    svg {
      margin-right: 8px;
      padding-top: 3px;
    }
  }
`;

const RightTopSec = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;

  a {
    //   color: #8b3eea;
    font-size: 16px;
    font-weight: 600;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

//   const SearchBtn = styled.button`
//     background: none;
//     top: 169px;
//     color: #fff;
//     border: 1px solid #19013b;
//     position: absolute;
//     padding: 10px 20px;
//     border-radius: 5px;
//     width: 134px;
//     font-size: 16px;
//     font-family: "Poppins";
//     background: #19013b;
//
//     &:hover {
//       background: transparent;
//       color: #8b3eea;
//       border: 1px solid #8b3eea;
//     }
//   `;

const SubHeader = () => {
  const [active, setActive] = useState(0);
  const [active1, setActive1] = useState(0);

  const array = [
    { name: "Flight", icon: <FaPlaneDeparture /> },
    { name: "Tour", icon: <TbWorld /> },
    { name: "Visa", icon: <FaPassport /> },
  ];
  const array1 = ["One way", "Roundtrip", "Multy city"];

  return (
    <SubHeaderSection>
      <Container className="Container">
        <TopSec className="TopSec">
          <LeftTopSec className="Left">
            {array.map((item, index) => (
              <ButtonComponent
                key={index}
                setActive={() => setActive(index)}
                active={active === index}
                element={item}
              />
            ))}
          </LeftTopSec>
          <RightTopSec className="Right">
            {array1.map((el, i) => (
              <LinkComponent
                key={i}
                setActive1={() => setActive1(i)}
                active={active === i}
                k={el}
              />
            ))}
          </RightTopSec>
        </TopSec>
      </Container>

      <FlightCheck />
      <button className="SearchBtn">Search</button>
    </SubHeaderSection>
  );
};

const MyDiv = styled.button`
  background-color: ${(props) => (props.active ? "#8b3eea" : "transparent")};
  border: ${(props) =>
    props.active ? "1px solid #8b3eea" : "1px solid #8b3eea"};
  color: ${(props) => (props.active ? "#fff" : "#8b3eea")};
`;

const Mylink = styled.a`
  color: ${(props) => (props.active1 ? "#8b3eea" : "#2B2540")};
`;

const ButtonComponent = (props) => {
  const { element, active, setActive } = props;
  console.log(element);
  return (
    <MyDiv onClick={setActive} active={active}>
      {element.icon}
      {element.name}
    </MyDiv>
  );
};

const LinkComponent = (props) => {
  const { k, active1, setActive1 } = props;
  return (
    <Mylink onClick={setActive1} active1={active1}>
      {k}
    </Mylink>
  );
};

export default SubHeader;
