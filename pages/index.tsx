import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { HomeHeader } from "../components/HomeHeader";
import { TopBar } from "../components/Topbar";
import { store } from "../store/store";
import { useAppSelector } from "../store/storeHooks";

const Home: NextPage = () => {
  const darkTheme = useAppSelector((store) => store.theme.darkTheme);
  return (
    <div
      className={`App container absolute top-0 left-0 bottom-0 right-0 flex transition duration-500 flex-col justify-center ${
        darkTheme ? "bg-black text-white" : ""
      }`}
    >
      <Head>
        <title>Emtyffx</title>
      </Head>
      <TopBar />
      <HomeHeader />
    </div>
  );
};

export default Home;
