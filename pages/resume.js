import React from "react";
import SoundButton from "../components/SoundButton";

export default function Resume() {
  return (
    <div style={{ color: "#fff" }}>
      <h1>Resume / Experience</h1>
      <p>
        Discover my professional journey and experiences that shaped my career.
      </p>
      <SoundButton onClick={() => console.log("Resume button clicked!")}>
        Download Resume
      </SoundButton>
    </div>
  );
}
