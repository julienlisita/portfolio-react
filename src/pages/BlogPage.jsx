// src/pages/BlogPage.jsx

import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/common/Pagination";
import PageTitle from "../components/common/PageTitle";
import {articles} from "../data/articles"
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";
import Button from "../components/common/Button";

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
          <div
            key={index}
            className="bg-[#2a2a2a] rounded-xl p-6 transition"
          >
            <div className="flex items-start gap-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-400">{article.date}</p>

                <h3 className="text-gray-100 font-semibold text-lg">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {article.excerpt}
                </p>

                <div className="pt-3">
                  <Button to={`/blog/${article.slug}`} variant="text">
                  Lire l’article →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <CtaFinal
        title="Restons en contact"
        tagline="Vous avez aimé mes articles ? Discutons de vos idées ou de vos besoins."
        primary={{ href: "/contact", text: "Contact" }}
        secondary={{href: "/portfolio", text: "Portfolio"}}
      />
    </>
  );
}