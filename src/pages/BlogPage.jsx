import { useState } from "react";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";
import {articles} from "../data/articles"

export default function BlogPage() {

  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = articles.slice(start, start + articlesPerPage);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20 text-white pb-16 sm:pb-20 lg:pb-24">
      
      <PageTitle>Tout les articles</PageTitle>

      <div className="space-y-4 mt-8 sm:mt-10 lg:mt-12">
        {paginatedArticles.map((article, index) => (
          <a
            key={index}
            href={`/blog/${article.slug}`}
            className="block bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333] transition group"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 rounded h-full bg-gradient-to-b from-[#9B59B6] to-[#007AFF] blur-[4px]" />
              <div>
                <p className="text-xs text-gray-400">{article.date}</p>
                <h3 className="text-white font-semibold text-lg group-hover:text-[#007AFF] transition">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-[#007AFF] transition">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}