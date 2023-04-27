import styled from "styled-components";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  FaExchangeAlt,
  FaPlaneArrival,
  FaPlaneDeparture,
} from "react-icons/fa";
import AiOutlineCalendar from "react-icons/ai";

const FlightContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 25% 25% 35% 15%);
  width: 100%;
  //   justify-content: space-between;
  margin: 75px -30px;
  padding: 0px 30px;
  color: #19013b;
  gap: 20px;

  .BetweenSec {
    background: rgba(139, 62, 234, 0.09);
    position: absolute;
    width: 38.2px;
    height: 38px;
    left: 269px;
    top: 105px;
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
  display: grid;
  grid-template-columns: repeat(2, 80% 20%);
  //   justify-content: center;
  align-items: start;
  //   flex-direction: column;
  color: #19013b;
  //   width: 100%;
  //   height: 90px;
  border-radius: 10px;
  background: rgba(139, 62, 234, 0.09);

  .FromSecContent {
    // background: red;
    // display: flex;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 !important;
    // margin: 15px;
    padding: 15px;

    h5 {
      width: 100px;
      height: 20px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      margin-bottom: 5px;
      font-size: 14px;
      /* or 200% */
      align-items: center;
      color: #818090;
    }
    p.FromFirstPara {
      width: 93.92px;
      height: 25px;
      margin-bottom: 5px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
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
      align-items: center;

      color: #212529;
    }
  }
`;

const FromSecIcon = styled.div`
  padding: 14px 0px 0px 0px;
  font-size: 35px;
  font-weight: 900;
  align-items: center;
  color: #212529;
`;

// const ToSection = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   color: #19013b;
//   width: 100%;
//   height: 90px;
//   border-radius: 10px;
//   background: rgba(139, 62, 234, 0.09);
// `;

const DateSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #19013b;
  border-radius: 10px;
  background: rgba(139, 62, 234, 0.09);
`;

const PassengerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #19013b;
  border-radius: 10px;
  background: rgba(139, 62, 234, 0.09);
`;

const FlightCheck = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <FlightContainer className="">
      <CardSection
        title={"From"}
        country={"New York"}
        city={"JFK - John F. Kennedy International..."}
        icon={<FaPlaneDeparture />}
      />
      <FaExchangeAlt className="BetweenSec" />
      <CardSection
        title={"To"}
        country={"London "}
        city={"LCY, London city airport..."}
        icon={<FaPlaneArrival />}
      />
      <CardSection
        // onClick={
        //   <DateRangePicker
        //     onChange={(item) => setState([item.selection])}
        //     showSelectionPreview={true}
        //     moveRangeOnFirstSelection={false}
        //     months={2}
        //     ranges={state}
        //     direction="horizontal"
        //   />
        // }
        title={"Journey date"}
        country={"05/05/2023 "}
        city={"Thursday"}
        icon={<AiOutlineCalendar />}
      />
      <CardSection
        title={" Passenger, Class"}
        country={"0 passenger "}
        city={"Business"}
        // icon={<FaPlaneArrival />}
      />
      ;
      {/* <ToSection className="ToSection">
        <h2>Lorem ipsum dolor sit amet</h2>
        <FaPlaneArrival />
      </ToSection> */}
      {/* <DateSection className="DateSection">
        Lorem ipsum dolor sit amet,
      </DateSection> */}
      {/* <PassengerSection className="PassengerSection">
        Lorem ipsum dolor sit amet
      </PassengerSection> */}
    </FlightContainer>
  );
};

const CardSection = (props) => {
  return (
    <FromSection className="FromSection">
      <div className="FromSecContent">
        <h5>{props.title}</h5>
        <p className="FromFirstPara">{props.country}</p>
        <p className="FromSecondPara">{props.city}</p>
      </div>
      <FromSecIcon className="FromSecIcon">{props.icon}</FromSecIcon>
    </FromSection>
  );
};

export default FlightCheck;

// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
//
// export default function CalendarGfg() {
//     const [value, onChange] = useState(new Date());
//
//     return (
//         <div>
//             <h1>NextJs Calendar - GeeksforGeeks</h1>
//             <Calendar
//                 onChange={onChange}
//                 value={value}
//             />
//         </div>
//     );
// }
