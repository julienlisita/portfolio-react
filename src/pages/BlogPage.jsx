// src/pages/BlogPage.jsx

import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/common/Pagination";
import PageTitle from "../components/common/PageTitle";
import {articles} from "../data/articles"
import Section from "../components/common/Section";

export default function BlogPage() {

  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = articles.slice(start, start + articlesPerPage);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <>
      <PageTitle>Tous les articles</PageTitle>

      <Section className="space-y-4">
        {paginatedArticles.map((article, index) => (
          <Link
            key={index}
            to={`/blog/${article.slug}`}
            className="block bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333] transition group"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 rounded h-full bg-gradient-to-b from-[#9B59B6] to-[#007AFF] blur-[4px]" />
              <div>
                <p className="text-xs text-gray-400">{article.date}</p>
                <h3 className="text-gray-100 font-semibold text-lg group-hover:text-[#007AFF] transition">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-[#007AFF] transition">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}