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
  top: -10%;
  //   padding: 0px 50px;
  z-index: -1;

  .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // max-width: 1200px;
    // height: 100vh;
    // background-color: #f4f6fc;
    padding: 10px 0px 0px 0px;
    position: relative;
    // z-index: 999;

    .Left {
      display: block;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: flex-start;
    //   position: relative;
      // z-index: 999;
      width: 60%;
      margin: 0 auto;
      padding-left: 50px;
    //   padding-right: 50px;

      h1 {
        font-size: 45px;
        font-weight: 600;
        color: #19013b;
        padding-top: -11px;
        margin-bottom: 20px;
        line-height: 50px;
      }
      p {
        font-size: 20px;
        font-family: "Poppins", sans-serif;
        line-height: 28.8px
        font-weight: 600;
        color: #1f1e46;
        // margin-bottom: 10px;
        padding-right: 50px;
        padding-left: 8px;
      }
    }
    .Right {
      display: flex;
      justify-content: center;
      align-items: start;
      width: 40%;
      // height: 100vh;
      // background-color: #f4f6fc;
      // padding: 10px 0px 0px 0px;
      position: relative;
      // z-index: 999;

      img {
        width: 713px;
        height: 584px;
        position: relative;
        bottom: 10px;
        right: 155px;
        // top: cal(50% - 689px / 2 + 32.2px);
      }
    }
  }
`;

const Header = () => {
  return (
    <MainHeaderSection>
      <div className="Container">
        <div className="Left">
          <h1>Experience, Explore, Dream, and Uncover Hidden Travel Gems</h1>
          <p>Discover Amazing flights, book tours and visa</p>
        </div>
        <div className="Right">
          <Image src={headerImg} alt="" />
        </div>
      </div>
    </MainHeaderSection>
  );
};
export default Header;
