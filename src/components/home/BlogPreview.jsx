// src/components/home/BlogPreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";
import {articles} from "../../data/articles"
import Button from "../common/Button";

function estimateReadingTime(text = "") {
  // ~200 mots/minute (approx)
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export default function BlogPreview() {

  return (
    <HomeSectionWrapper
      id="blog"
      title="Derniers articles"
      link={{ href: "/blog", text: "Voir tous les articles" }}
    >
      <div className="w-full space-y-4">
        {articles.slice(0, 3).map((article, index) => {
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
      </div>
    </HomeSectionWrapper>
  );
}