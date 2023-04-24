import Link from "next/link";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="HeaderSection">
      <div className="Logo">
        <h4>Logo</h4>
      </div>
      <div className="NavLinks">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
