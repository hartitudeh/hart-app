import { React } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import Image from "next/image";

const options = [
  { value: "option1", label: "English" },
  { value: "option2", label: "Arabic" },
  { value: "option3", label: "French" },
];
const currency = [
  { value: "option1", label: "USD" },
  { value: "option2", label: "NGN" },
  { value: "option3", label: "BTC" },
];

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  z-index: 999;
  width: 100%;
  color: #19013b;
  height: 100px;
  margin-bottom: 20px;
`;
const UpperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 2px solid #e6e6e6;
  .UpperNavLeft {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 50%;

    .SocialLink {
      // display: flex;
      // justify-content: space-between;
      align-items: center;
      // width: 50%;
      i {
        font-size: 20px;
        color: #19013b;
      }
    }
    .CallAdmin {
      // display: flex;
      padding: 0 10px;
      // justify-content: space-between;
      align-items: center;
      // width: 50%;
      h3 {
        font-size: 14px;
        color: #19013b;
      }
    }
    .EmailAdmin {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      // width: 50%;
      h3 {
        font-size: 14px;
        color: #19013b;
      }
    }
  }
  .UpperNavRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 50%;
    a {
      font-size: 14px;
      color: #19013b;
      text-decoration: none;
      padding: 0 10px;
    }
  }
`;
const Home = () => {
  return (
    <HeaderSection className="HeaderSection">
      <UpperNav className="UpperNav">
        <div className="UpperNavLeft">
          <div className="SocialLink">
            <Image src={facebookIcon} alt="" />
            <Image src={instagramIcon} alt="" />
            <Image src={twitterIcon} alt="" />
            <Image src={linkedinIcon} alt="" />
          </div>
          <div className="CallAdmin">
            <h3>+44 7932 769682</h3>
          </div>
          <div className="EmailAdmin">
            <h3>Contact@travilify.com</h3>
          </div>
        </div>
        <div className="UpperNavRight">
          <Link href="/">Login</Link>
          <Link href="/">Sign Up</Link>
          <Link href="/">
            <Dropdown options={options} />
          </Link>
          <Link href="/">
            <Dropdown options={currency} />
          </Link>
        </div>
      </UpperNav>

      <div className="Logo">
        <h4>Logo</h4>
      </div>
      <div className="NavLinks">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/blog">Blog</a>
        <a href="/profile">Profile</a>
        <a href="/contact">Contact</a>
      </div>
    </HeaderSection>
  );
};

export default Home;
