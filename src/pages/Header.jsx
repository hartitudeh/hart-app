import Image from "next/image";
import headerImg from "../assets/headerImg.png";
import styled from "styled-components";

const MainHeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //   height: 100vh;
  // background-color: #f4f6fc;
  // padding: 10px 0px 0px 0px;
  position: absolute;
  top: 6%;
  //   padding: 0px 50px;
  z-index: -1;

  .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // max-width: 1200px;
    // height: 100vh;
    // background-color: #f4f6fc;
    padding: 10px 0px 0px 0px;
    position: relative;
    // z-index: 999;

    .Left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 50%;
      //   height: 100vh;
      // background-color: #f4f6fc;
      // padding: 10px 0px 0px 0px;
      position: relative;
      // z-index: 999;
      padding-left: 50px;
      padding-right: 50px;
      h2 {
        font-size: 24px;
        font-family: "Poppins", sans-serif;
        line-height: 28.8px
        font-weight: 600;
        color: #6D6D74;
        margin-top: 40px;
        margin-bottom: 20px;
        padding-right: 50px;

        span {
            color: #19013b;
            text-transform: uppercase;
            font-family: "cursive";
        }
        }

      h1 {
        font-size: 3rem;
        font-weight: 600;
        color: #19013b;
        margin-bottom: 50px;
      }
      p {
        font-size: 24px;
        font-family: "Poppins", sans-serif;
        line-height: 28.8px
        font-weight: 600;
        color: #1f1e46;
        margin-bottom: 10px;
        padding-right: 50px;
      }
    }
    .Right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      // height: 100vh;
      // background-color: #f4f6fc;
      // padding: 10px 0px 0px 0px;
      position: relative;
      // z-index: 999;

      img {
        width: 100%;
        height: 589px;
        // position: absolute;
        // left: 767px;
        // right: -25px;
        top: cal(50% - 689px / 2 + 32.2px);
      }
    }
  }
`;

const Header = () => {
  return (
    <MainHeaderSection>
      <div className="Container">
        <div className="Left">
          <h2>
            Welcome to <span>travilify</span>
          </h2>
          <h1>Experience, Explore, Dream, and Uncover Hidden Travel Gems</h1>
          <p>
            Discover Amazing Flights, Hotels, Tours, <br /> Cars, and
            Unforgettable Packages.
          </p>
        </div>
        <div className="Right">
          <Image src={headerImg} alt="" />
        </div>
      </div>
    </MainHeaderSection>
  );
};
export default Header;
