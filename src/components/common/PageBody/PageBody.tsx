import { PageBodyData } from "../../../models";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  duotoneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const them = {
  dark: dracula,
  light: duotoneLight,
};

export function PageBody({ backPath, title, text }: PageBodyData) {
  return (
    <div className="max-w-screen-xl mx-auto p-8 ">
      <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
        {title}
      </h2>
      <Link to={backPath} className="dark:text-yellow-50 text-gray-900 mb-10">
        <b>👈 回目錄</b>
      </Link>
      <ReactMarkdown
        className="leading-9 text-gray-700 dark:text-white Md"
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                showLineNumbers={true}
                /* @ts-ignore */
                style={dracula}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {text}
      </ReactMarkdown>
      <footer className="m-10 mb-10">
        <Link to={backPath} className="dark:text-yellow-50 text-gray-900">
          <b>👈 回目錄</b>
        </Link>
      </footer>
    </div>
  );
}
