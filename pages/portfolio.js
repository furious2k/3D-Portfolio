import React from "react";
import SoundButton from "../components/SoundButton";

export default function Portfolio() {
  return (
    <div style={{ color: "#fff" }}>
      <h1>Portfolio</h1>
      <p>Here are some of my latest projects showcased in 3D.</p>
      {/* You could render 3D models or interactive project cards here */}
      <SoundButton onClick={() => console.log("Portfolio button clicked!")}>
        View Projects
      </SoundButton>
    </div>
  );
}
