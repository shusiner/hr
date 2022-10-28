import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Headers from "../components/Headers";

const Home: NextPage = () => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="h-screen bg-white dark:bg-slate-800 dark:text-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <Headers />
        <div className="p-4">
          <p>Hello There, Welcome to my humble place.</p>
          <div className="">
            <Link href="/nav">
              <a className="text-blue-500">Link to github repo</a>
            </Link>
          </div>
          <p>
            Here is a list of components I am working on (mostly base on
            tailwindCSS):
          </p>
          <ul className="list-disc">
            <li>
              <Link href="/nav">
                <a className="text-blue-500">Top nav bar</a>
              </Link>
            </li>
            <li>
              <Link href="/darkmode">
                <a className="text-blue-500">dark mode btn</a>
              </Link>
            </li>
            <li>
              <Link href="/darkmode">
                <a className="text-blue-500">use same element across pages</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
