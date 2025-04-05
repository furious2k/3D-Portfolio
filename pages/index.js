import React from "react";
import SoundButton from "../components/SoundButton";

export default function Home() {
  return (
    <div style={{ color: "#fff" }}>
      <h1>Welcome to My Immersive Portfolio</h1>
      <p>
        Explore my 3D environment and discover my work, experience, and passions.
      </p>
      <SoundButton onClick={() => console.log("Home button clicked!")}>
        Get Started
      </SoundButton>
    </div>
  );
}
