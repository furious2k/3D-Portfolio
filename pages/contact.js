import React, { useRef } from "react";

export default function Contact() {
  const audioRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    // Handle form submission logic here (e.g., sending an email)
    alert("Form submitted!");
  };

  return (
    <div style={{ color: "#fff" }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input type="text" placeholder="Your Name" required style={{ padding: "0.5rem" }} />
        <input type="email" placeholder="Your Email" required style={{ padding: "0.5rem" }} />
        <textarea placeholder="Your Message" required style={{ padding: "0.5rem" }} />
        <button type="submit" style={{ padding: "0.5rem", background: "#1565C0", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </div>
  );
}
