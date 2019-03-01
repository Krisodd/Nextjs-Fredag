import React from "react";
import Typed from "react-typed";
import styled from "styled-components";

const TypedTitle = () => (
  <Typed
    strings={[
      "This is a Next.js test for Lærefredag, deployed using Netlify!",
      "I scale well with server side rendering, especially when adhering to the JAMstack principles",
      'Check out the code on <a href="https://github.com/Krisodd/Nextjs-Fredag">GitHub!</a>'
    ]}
    typeSpeed={40}
    backDelay={3000}
    smartBackspace
  />
);

export default TypedTitle;
