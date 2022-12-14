import { Link } from "react-router-dom";
import { LinkMap } from "../../../models";

let rootEl: HTMLElement | null = document.getElementById("root");
let getEmoji: string = "π/π";

function changDark(): void {
  if (rootEl !== null) {
    if (rootEl.className.includes("dark")) {
      rootEl.classList.remove("dark");
    } else {
      rootEl.classList.add("dark");
    }
  }
}

export function Header() {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
          {/* <svg
            width="25"
            height="25"
            viewBox="0 0 1792 1792"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
          </svg> */}
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex md:flex items-center hidden">
            <Link
              to={LinkMap.Home.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              ιθ
            </Link>
            <Link
              to={LinkMap.About.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              ιζΌδΈι»ι
            </Link>
            {/* <Link
              to={LinkMap.Find.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              ε°ζΎδΈι»ι
            </Link> */}
            <Link
              to={LinkMap.Portfolio.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              δΈι»ιηη­θ¨
            </Link>
            <button
              className="py-2 px-6 flex hover:text-gray-400 "
              onClick={() => changDark()}
            >
              {getEmoji}
            </button>
          </nav>
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg sm:flex lg:hidden md:hidden items-center hidden">
            <Link
              to={LinkMap.Home.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              ιθ
            </Link>
            <Link
              to={LinkMap.About.toString()}
              className="py-2 px-6 flex hover:text-gray-300"
            >
              ιζΌ
            </Link>
            {/* <Link
              to={LinkMap.Find.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              ε°ζΎ
            </Link> */}
            <Link
              to={LinkMap.Portfolio.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              η­θ¨
            </Link>
            <button
              className="py-2 px-6 flex hover:text-gray-400"
              onClick={() => changDark()}
            >
              {getEmoji}
            </button>
          </nav>
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:hidden md:hidden sm:hidden  items-center flex">
            <Link
              to={LinkMap.Home.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              π 
            </Link>
            <Link
              to={LinkMap.About.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              π
            </Link>
            {/* <Link
              to={LinkMap.Find.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              π
            </Link> */}
            <Link
              to={LinkMap.Portfolio.toString()}
              className="py-2 px-6 flex hover:text-gray-400"
            >
              π¨
            </Link>
            <button
              className="py-2 px-6 flex hover:text-gray-400"
              onClick={() => changDark()}
            >
              π
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
