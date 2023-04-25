import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/logo.png";
import searchIcon from "../assets/searchIcon.png";
import Header from "./Header";
import { FaAngleDown } from "react-icons/fa";

const NavbarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 50px;
  color: #19013b;

  .LogoSec {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 175px;
      height: 76px;
    }
  }
  .NavSection {
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      list-style: none;
    }
    a {
      margin-right: 35px;
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      text-decoration: none;
      color: #19013b;
      postion: relative;
    }
    img {
      width: 10px;
      height: 10px;
      margin-left: 3px;
      position: absolute;
      top: 16.35%;
    }
  }
  .SearchSec {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 30px;
    }
    button {
      padding: 10px 20px;
      border: none;
      background-color: #8b3eea;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      lin-height: 24px;
      text-align: center;
      letter-spacing: 0.3px;
      text-transform: capitalize;
      border-radius: 5px;

      &:hover {
        background-color: #fff;
        color: #19013b;
        border: 1px solid #19013b;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <NavbarSection className="NavberSec">
        <div className="LogoSec">
          <Image src={logo} alt="" />
        </div>
        <div className="NavSection">
          <nav className="Navbar">
            <ul className="NavList">
              <Link href="/">
                offers <FaAngleDown />
              </Link>
              <Link href="/">
                services <FaAngleDown />
              </Link>
              <Link href="/"> dashboard</Link>
              <Link href="/"> blog</Link>
              <Link href="/"> contact</Link>
            </ul>
          </nav>
        </div>
        <div className="SearchSec">
          <Image src={searchIcon} alt="" />
          <button>Become a partner</button>
        </div>
      </NavbarSection>
      <Header />
    </>
  );
};

export default Navbar;
