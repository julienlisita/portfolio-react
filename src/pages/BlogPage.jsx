// src/pages/BlogPage.jsx

import { useState } from "react";
import Pagination from "../components/common/Pagination";
import PageTitle from "../components/common/PageTitle";
import { articles } from "../data/articles";
import Section from "../components/common/Section";
import Button from "../components/common/Button";

function estimateReadingTime(text = "") {
  // ~200 mots/minute (approx)
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export default function BlogPage() {
  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = articles.slice(start, start + articlesPerPage);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <>
      <PageTitle>Blog</PageTitle>

      {/* Intro (SEO + confiance) */}
      <Section className="space-y-3">
        <p className="text-gray-300 text-base sm:text-lg">
          Ici je partage des conseils concrets pour les <strong>artisans</strong>, <strong>indépendants</strong> et{" "}
          <strong>petites entreprises</strong> : visibilité locale, site vitrine, performance, choix techniques…
        </p>
        <p className="text-sm text-gray-400">
          Objectif : vous aider à y voir clair et à prendre de bonnes décisions pour votre site.
        </p>
      </Section>

      {/* Liste d’articles */}
      <Section className="space-y-4">
        {paginatedArticles.map((article, index) => {
          const readingTime = estimateReadingTime(`${article.title} ${article.excerpt}`);

          return (
            <article
              key={index}
              className="bg-[#2a2a2a] rounded-xl p-6 border border-[#2f2f2f]"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                  <span>{article.date}</span>
                  <span className="opacity-60">•</span>
                  <span>{readingTime}</span>
                  {article.category && (
                    <>
                      <span className="opacity-60">•</span>
                      <span className="px-2 py-1 rounded-md bg-[#1e1e1e] text-gray-300">
                        {article.category}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-gray-100 font-semibold text-lg">
                  {article.title}
                </h2>

                <p className="text-gray-300 text-sm">
                  {article.excerpt}
                </p>

                <div className="pt-2">
                  <Button to={`/blog/${article.slug}`} variant="text">
                    Lire l’article ›
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </Section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* CTA léger (pas de CtaFinal ici) */}
      <Section>
        <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-gray-300">
            Un projet de site ? Je peux vous conseiller et vous faire une proposition adaptée.
          </p>
          <div className="flex items-center gap-3">
            <Button to="/contact" variant="text">Me contacter ›</Button>
            <a href="/realisations" className="text-sm text-gray-400 hover:underline">
              Voir des réalisations ›
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}