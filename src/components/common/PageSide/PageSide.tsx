import { PageDataList, PageData } from "../../../models";

export function PageSide({ list }: PageDataList) {
  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-screen">
          <nav className="mt-10 px-6 ">
            {list.map((item: PageData) => (
              <>
                <button className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ">
                  <span className="mx-4 text-lg font-normal">{item.text}</span>
                  <span className="flex-grow text-right"></span>
                </button>
              </>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
