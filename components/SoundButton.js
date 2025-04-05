import React, { useRef } from "react";

const buttonStyle = {
  padding: "0.5rem 1rem",
  background: "#1565C0",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

function SoundButton({ children, onClick, ...props }) {
  const audioRef = useRef(null);

  const handleClick = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    if (onClick) onClick(e);
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleClick} {...props}>
        {children}
      </button>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </>
  );
}

export default SoundButton;
