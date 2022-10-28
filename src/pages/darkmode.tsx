import type { NextPage } from "next";
import Link from "next/link";
import Headers from "../components/Headers";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-white dark:bg-slate-800 dark:text-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <Headers />
        <div className="flex flex-col gap-3 p-2">
          <div className="">
            <Link href="/">
              <a className="text-blue-500">Home</a>
            </Link>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            localStorage.theme = "dark";
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
          }}
        >
          Dark
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
          }}
        >
          Light
        </div>
      </main>
    </div>
  );
};

export default Home;
