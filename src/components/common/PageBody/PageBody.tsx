import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
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
      className={`max-w-screen-xl mx-auto p-8 ${
        fadeIn ? "animate-fade-in" : "" // 加入淡入效果的 CSS 類名
      }`}
    >
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
          code: renderCodeBlock,
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
