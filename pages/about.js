import React from "react";
import SoundButton from "../components/SoundButton";

export default function About() {
  return (
    <div style={{ color: "#fff" }}>
      <h1>About Me</h1>
      <p>
        I am a passionate developer and 3D artist who loves creating immersive digital experiences.
      </p>
      <SoundButton onClick={() => console.log("About button clicked!")}>
        Learn More
      </SoundButton>
    </div>
  );
}
