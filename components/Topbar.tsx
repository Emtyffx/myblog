import { useRouter } from "next/router";

import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";
import { themeChange } from "theme-change";
import { useEffect, useRef, useState } from "react";

export const TopBar = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const router = useRouter();

  const themeIcons = new Map();
  themeIcons.set("dark", <BsMoon size={20} />);
  themeIcons.set("light", <BsSun size={20} />);

  useEffect(() => {
    themeChange(false);
    setCurrentTheme(
      document.documentElement.getAttribute("data-theme") || "dark"
    );
  }, []);
  useEffect(() => {
    document.getElementById("toggle_theme")?.addEventListener("click", () => {
      setCurrentTheme(currentTheme == "dark" ? "light" : "dark");
    });
  }, []);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log(toggleRef.current?.classList);
  }, [toggleRef]);
  return (
    <nav
      className={`navbar z-20 bg-opacity-80 backdrop-blur flex flex-row bg-base-100 justify-between items-center fixed top-0 left-0 w-full py-3 px-5 border-b ${""}`}
    >
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="bg-base-100 bg-opacity-90 backdrop-blur-xl border-2 menu menu-compact dropdown-content mt-3 p-2 shadow-xl rounded-box w-52"
        >
          <li>
            <Link href={"/"}>Homepage</Link>
          </li>
          <li>
            <Link href={"/hash"}>Hasher app</Link>
          </li>
          <li>
            <Link href={"/projects"}>My projects</Link>
          </li>
        </ul>
      </div>
      <span className="text-xl">Emtyffx</span>

      <button
        id="toggle_theme"
        data-toggle-theme="dark,light"
        ref={toggleRef}
        data-act-class="ACTIVECLASS"
      >
        {themeIcons.get(currentTheme)}
      </button>
    </nav>
  );
};
