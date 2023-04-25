import styled from "styled-components";
import { FaPlaneDeparture } from "react-icons/fa";


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
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    color: #19013b;

 `;

 const FromSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #19013b;
 `;

    const ToSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #19013b;
    `;

    const DateSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #19013b;
    `;

    const PassengerSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #19013b;
    `;

const FlightCheck = () => {
  return (
    <FlightContainer className="">
      <FromSection className="FromSection">
        <h5>From</h5>
        <div className="icon">
          <FaPlaneDeparture />
        </div>
        <h3>New York</h3>
        <p>JFK - John F. Kennedy International...</p>
      </FromSection>
      <ToSection className="ToSection">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat ab non saepe culpa aliquam doloribus! Repellendus recusandae harum accusantium!</h2>
      </ToSection>
      <DateSection className="DateSection">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, vitae?
      </DateSection>
      <PassengerSection className="PassengerSection">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, exercitationem.
      </PassengerSection>
    </FlightContainer>
  );
};

export default FlightCheck;
