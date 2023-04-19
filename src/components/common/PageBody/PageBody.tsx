import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  dracula,
  duotoneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { PageBodyData } from "../../../models";

const them = {
  dark: dracula,
  light: duotoneLight,
};

export function PageBody({ backPath, title, text }: PageBodyData) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // 在渲染後觸發淡入效果
    setFadeIn(true);
  }, []);

  const renderCodeBlock = (props: any) => {
    const { node, inline, className, children } = props;
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
  };

  return (
    <div
      className={`max-w-screen-xl mx-auto p-8 w-full ${
        fadeIn ? "animate-fade-in" : ""
      }`}
    >
      <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
        {title}
      </h2>
      <Link
        to={backPath}
        className="dark:text-yellow-50 text-gray-900 mb-10 inline-flex items-center hover:text-yellow-500 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.707 3.293A1 1 0 0 1 12.121 4.707L6.414 10l5.707 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span>回目錄</span>
      </Link>
      <ReactMarkdown
        className="leading-9 text-gray-700 dark:text-white Md"
        remarkPlugins={[remarkGfm]}
        components={{
          code: renderCodeBlock,
          img: ({ node, ...props }) => (
            /* @ts-ignore */
            <LazyLoadImage {...props} effect="blur" /> // 使用 LazyLoadImage 元件進行圖片的懶載入
          ),
        }}
      >
        {text}
      </ReactMarkdown>
      <footer className="m-10 mb-10">
        {/* <p className="text-gray-500 dark:text-gray-400 text-sm">
          發文時間：{new Date().toLocaleString()}
        </p> */}
        <Link
          to={backPath}
          className="inline-flex items-center text-gray-900 dark:text-yellow-50 hover:text-yellow-500 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.707 3.293A1 1 0 0 1 12.121 4.707L6.414 10l5.707 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>回目錄</span>
        </Link>
      </footer>
    </div>
  );
}
