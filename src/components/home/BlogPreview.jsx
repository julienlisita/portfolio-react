// src/components/home/BlogPreview.jsx

import HomeSection from "./HomeSection";
import {articles} from "../../data/articles"
import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function BlogPreview() {

  return (
    <HomeSection
      id="blog"
      title="Derniers articles"
      link={{ href: "/blog", text: "Blog" }}
    >
      <div className="w-full space-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] rounded-xl p-6 transition hover:bg-[#333] mx-auto max-w-5xl"
          >
            <div className="flex items-start gap-4">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-gray-400">
                  {article.date}
                </p>

                <h3 className="text-gray-100 font-semibold text-lg sm:text-xl">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base">
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
      </div>
    </HomeSection>
  );
}