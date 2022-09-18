import { PageBodyData } from "../../../models";
import ReactMarkdown from "react-markdown";

export function PageBody({ title, text }: PageBodyData) {
  return (
    <div className="max-w-screen-xl mx-auto p-8 ">
      <h2 className="font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
        {title}
      </h2>
      <ReactMarkdown className="text-gray-500 dark:text-white">
        {text}
      </ReactMarkdown>
    </div>
  );
}
