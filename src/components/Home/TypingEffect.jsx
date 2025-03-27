import React from "react";
import Typist from "react-typist-component";

const TypingEffect = ({
  words = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer"], // Default words
  typingDelay = 150, // Delay between characters
  backspaceDelay = 50, // Delay between backspace
  delayBetweenWords = 1000, // Delay between words
  fontSize = "24px", // Default font size
  color = "white", // Default color
  loop = true, // Infinite loop
}) => {
  return (
    <div style={{ fontSize, color, fontWeight: "bold", textAlign: "center" }}>
      <Typist typingDelay={typingDelay} backspaceDelay={backspaceDelay} loop={loop} cursor={<span className="cursor">|</span>}>
        {words.map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <Typist.Backspace count={word.length} />
            <Typist.Delay ms={delayBetweenWords} />
          </React.Fragment>
        ))}
      </Typist>
    </div>
  );
};

export default TypingEffect;
