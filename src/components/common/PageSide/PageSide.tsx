import { Link } from "react-router-dom";
import { PageDataList, PageData } from "../../../models";

export function PageSide({ list }: PageDataList) {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-screen">
          <h2 className="ml-5 mt-10 text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
            目錄:{" "}
          </h2>
          <nav className="mt-10 px-6 ">
            {list.map((item: PageData) => (
              <Link
                to={item.goPath}
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                key={item.id.toString()}
              >
                <span className="mx-1 sm:mx-4 text-lg font-normal">
                  {item.text} 👉
                </span>
                <span className="flex-grow text-right"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
