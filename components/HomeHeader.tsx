import React, { useEffect, useRef } from "react";
import { VscGithub } from "react-icons/vsc";
import { BsTelegram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import ReactTypingEffect from "react-typing-effect";
export const HomeHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center mt-3">
      <div className="avatar">
        <div className="w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-4">
          <img src="/logo.png" alt="logo" />
        </div>
      </div>
      <h1 className="text-4xl font-semibold">Emtyffx</h1>
      <ReactTypingEffect
        className="text-xl"
        text={[
          "Golang",
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "C#",
          "React",
          "Vue",
        ]}
        eraseDelay={1000}
        typingDelay={500}
        staticText={"I can program on"}
      />
      <div className=" border-t-2 mt-3 flex p-3 flex-row justify-center items-center">
        <a href="https://github.com/Emtyffx" className="mx-1.5">
          <VscGithub size={32} />
        </a>
        <a href="https://t.me/WxCEmtyf" className="mx-1.5">
          <BsTelegram size={32} />
        </a>
        <a href="mailto:p.verbytsky@gmail.com" className="mx-1.5">
          <FiMail size={32} />
        </a>
      </div>
    </header>
  );
};
