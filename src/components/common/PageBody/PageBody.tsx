import { PageBodyData } from "../../../models";

export function PageBody({ title, text }: PageBodyData) {
  return (
    <div className="max-w-screen-xl mx-auto p-8 ">
      <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
        {title}
      </h2>
      <ul className="flex items-start gap-8 flex-wrap">
        <li className="w-auto">
          <p className="mt-2 text-lg leading-6  text-gray-500 dark:text-white">
            {text}
          </p>

          {/* <p className="text-lg font-medium leading-6  text-gray-900 dark:text-gray-300">
            What is a home energy rating?
          </p>
          <p className="mt-2 text-base leading-6  text-gray-500 dark:text-white">
            A home energy rating is an estimated calculation into a homes           
          </p> */}
        </li>
      </ul>
    </div>
  );
}
