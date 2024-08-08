// src/TypingAnimation.js

import React, { useState, useEffect } from "react";
// Import CSS for styling

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Programmer", "Web Developer", "UI/UX Designer"];
  const typingSpeed = 200; // Speed of typing
  const deletingSpeed = 100; // Speed of deleting
  const pauseDuration = 1500; // Pause duration after a full word

  useEffect(() => {
    const currentRole = roles[index];
    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentRole.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }
        } else {
          setText(currentRole.substring(0, text.length + 1));
          if (text.length === currentRole.length) {
            setIsDeleting(true);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div className="typing-animation">
      I am a <span className="roles">{text}</span>
    </div>
  );
};

export default TypingAnimation;
