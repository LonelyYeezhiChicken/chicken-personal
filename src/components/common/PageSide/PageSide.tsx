import { Link } from "react-router-dom";
import { PageDataList, PageData } from "../../../models";
import { Footer } from "../../home";
import { motion } from "framer-motion";

export function PageSide({ list }: PageDataList) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-auto max-h-screen relative bg-white dark:bg-gray-900 rounded-lg shadow-md"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="mb-10">
          <h2 className="ml-5 mt-10 text-3xl font-extrabold leading-9 border-b-2 border-indigo-500 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
            目錄:
          </h2>
          <nav className="mt-10 px-6">
            {list.map((item: PageData) => (
              <motion.div
                key={item.id.toString()}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  to={item.goPath}
                  className="hover:text-indigo-500 hover:bg-indigo-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-800 dark:text-gray-400 rounded-lg"
                >
                  <span className="mx-1 sm:mx-4 text-lg font-semibold">
                    {item.text} ➜
                  </span>
                  <span className="flex-grow text-right"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
}
