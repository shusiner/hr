import type { NextPage } from "next";
import Headers from "../components/Headers";
import Headers1 from "../components/nav/Headers1";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <Headers />
        <div className="flex flex-col gap-3 p-2">
          <div className="">
            <Link href="/">
              <a className="text-blue-500">Home</a>
            </Link>
          </div>
          <div className="rounded-2xl border-2 border-solid border-sky-500 p-4">
            <h1>Nav 1, hamburger collapsed</h1>
            <Headers1 />
            {/* <div className="w-60 resize-x overflow-auto border-2 border-solid border-sky-400">
              resize test
            </div> */}
            {/* https://play.tailwindcss.com/O5es5mwQ5W?size=894x803 */}
            {/* <div className="mx-auto flex h-full w-full flex-col items-center justify-center rounded-lg border border-black bg-white md:max-h-[800px] md:max-w-[380px]">
              <h1>I'm a mobile view</h1>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
