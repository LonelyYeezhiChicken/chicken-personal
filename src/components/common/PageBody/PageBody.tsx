import { PageBodyData } from "../../../models";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const tt = `
| heading | b  |  c |  d  |
| - | :- | -: | :-: |
| cell 1 | cell 2 | 3 | 4 | 
`;

export function PageBody({ backPath, title, text }: PageBodyData) {
  return (
    <div className="max-w-screen-xl mx-auto p-8 ">
      <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
        {title}
      </h2>
      <Link to={backPath} className="dark:text-yellow-50 text-gray-900 mb-10">
        <b>👈 回目錄</b>
      </Link>
      <ReactMarkdown className="leading-9 text-gray-500 dark:text-white Md">
        {tt}
      </ReactMarkdown>
      <footer className="m-10 mb-32">
        <Link to={backPath} className="dark:text-yellow-50 text-gray-900">
          <b>👈 回目錄</b>
        </Link>
      </footer>
    </div>
  );
}
