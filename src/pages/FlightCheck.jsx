import styled from "styled-components";
import {
  FaExchangeAlt,
  FaPlaneArrival,
  FaPlaneDeparture,
} from "react-icons/fa";

// const FlightContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 10px 0px 0px 0px;
//   position:absolute;
//   position: relative;
//   top: 10%;
//   // z-index: 999;
//   color: #19013b;
// `;
//
// const FromSection = styled.div`
//   display: flex;
//   color: #19013b;
// `;

const FlightContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  //   justify-content: space-between;
  margin: 75px 0px;
  //   margin-bottom: 30px;
  //   padding: 0px 30px;
  color: #19013b;
  gap: 20px;

  .BetweenSec {
    background: rgba(139, 62, 234, 0.09);
    position: absolute;
    width: 38.2px;
    height: 38px;
    left: 314px;
    top: 101px;
    border-radius: 50px;
    border: 3px solid #fff;
    padding: 5px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #8b3eea;
  }
`;

const FromSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #19013b;
  width: 100%;
  height: 90px;
  border-radius: 10px;
  background: rgba(139, 62, 234, 0.09);

  .FromSecContent {
    // background: red;
    // display: flex;
    width: 80%;
    height: 100%;
    display: block;
    margin: 0 !important;
    margin-top: 15px;
    padding: 10px 0px;

    h5 {
      width: 35.87px;
      height: 20px;
      left: 83px;
      top: 82px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      /* or 200% */
      display: flex;
      align-items: center;
      color: #818090;
    }
    p.FromFirstPara {
      width: 93.92px;
      height: 25px;
      left: 83px;
      top: 103px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      display: flex;
      align-items: center;
      color: #000000;
    }
    p.FromSecondPara {
      width: 196.62px;
      height: 14px;
      left: 83px;
      top: 137px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 18px;
      /* or 164% */

      display: flex;
      align-items: center;

      color: #212529;
    }
  }
`;

const FromSecIcon = styled.div`


  
  .icon {
      position: absolute;
      width: 30.2px;
      height: 24px;
      left: 298px;
      top: 65px;

      font-family: "Font Awesome 5 Free";
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 24px;
      /* identical to box height, or 100% */

      display: flex;
      align-items: center;

      color: #212529;
    }
  }

  `;

const ToSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #19013b;
  width: 100%;
  height: 90px;
  border-radius: 10px;
  background: rgba(139, 62, 234, 0.09);
`;

const DateSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #19013b;
  width: 100%;
  height: 90px;
  border-radius: 10px;
  background: rgba(139, 62, 234, 0.09);
`;

const PassengerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #19013b;
  width: 100%;
  height: 90px;
  border-radius: 10px;
  background: rgba(139, 62, 234, 0.09);
`;

const FlightCheck = () => {
  return (
    <FlightContainer className="">
      <CardSection />
      <FaExchangeAlt className="BetweenSec" />
      <CardSection />
      {/* <ToSection className="ToSection">
        <h2>Lorem ipsum dolor sit amet</h2>
        <FaPlaneArrival />
      </ToSection> */}
      <DateSection className="DateSection">
        Lorem ipsum dolor sit amet,
      </DateSection>
      <PassengerSection className="PassengerSection">
        Lorem ipsum dolor sit amet
      </PassengerSection>
    </FlightContainer>
  );
};

const CardSection = () => {
  return (
    <FromSection className="FromSection">
      <div className="FromSecContent">
        <h5>From</h5>
        <p className="FromFirstPara">New York</p>
        <p className="FromSecondPara">JFK - John F. Kennedy International...</p>
      </div>
      <FromSecIcon className="FromSecIcon">
        <FaPlaneDeparture />
      </FromSecIcon>
    </FromSection>
  );
};

export default FlightCheck;
