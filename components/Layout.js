import React from "react";
import NavBar from "./NavBar";
import ThreeScene from "./ThreeScene";

const layoutStyle = {
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden"
};

const contentStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2,
  width: "100%",
  height: "100%",
  padding: "2rem",
  pointerEvents: "none" // Allows 3D canvas interactions in background; adjust if needed.
};

const overlayStyle = {
  pointerEvents: "auto" // Enable interactivity for the overlay content.
};

function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <ThreeScene />
      <div style={contentStyle}>
        <NavBar />
        <div style={overlayStyle}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
