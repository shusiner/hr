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
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
