import type { NextPage } from "next";
import Link from "next/link";
import Headers from "../components/Headers";

const Home: NextPage = () => {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <Headers />
        <div className="p-4">
          <p>Hello There, Welcome to my humble place.</p>
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
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
