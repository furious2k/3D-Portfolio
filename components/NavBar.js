import Link from "next/link";
import React from "react";

const navStyle = {
  display: "flex",
  gap: "1rem",
  marginBottom: "2rem"
};

function NavBar() {
  return (
    <nav style={navStyle}>
      <Link href="/" passHref>
        <a style={{ color: "#fff", textDecoration: "none" }}>Home</a>
      </Link>
      <Link href="/about" passHref>
        <a style={{ color: "#fff", textDecoration: "none" }}>About</a>
      </Link>
      <Link href="/portfolio" passHref>
        <a style={{ color: "#fff", textDecoration: "none" }}>Portfolio</a>
      </Link>
      <Link href="/resume" passHref>
        <a style={{ color: "#fff", textDecoration: "none" }}>Resume</a>
      </Link>
      <Link href="/contact" passHref>
        <a style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
      </Link>
    </nav>
  );
}

export default NavBar;
