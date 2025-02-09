"use client";

import React from "react";

type ArticleListWrapperProps = {
  children: React.ReactNode;
};

const ArticleListWrapper = ({ children }: ArticleListWrapperProps) => {
  return <div className="article-list-wrapper">{children}</div>;
};

export default ArticleListWrapper;
