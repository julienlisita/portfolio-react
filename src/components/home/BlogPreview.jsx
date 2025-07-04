// src/components/home/BlogPreview.jsx

import HomeSection from "./HomeSection";
import {articles} from "../../data/articles"
import { Link } from "react-router-dom";

export default function BlogPreview() {

  return (
    <HomeSection
      id="blog"
      title="Derniers articles"
      link={{ href: "/blog", text: "Blog" }}
    >
      <div className="space-y-4">
        {articles.map((article, index) => (
          <Link
            key={index}
            to={`/blog/${article.slug}`}
            className="block bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333] transition group"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 rounded h-full bg-gradient-to-b from-[#9B59B6] to-[#007AFF] blur-[4px]" />
              <div>
                <p className="text-xs sm:text-sm text-gray-400">{article.date}</p>
                <h3 className="text-gray-100 font-semibold text-lg sm:text-xl group-hover:text-[#007AFF] transition">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base group-hover:text-[#007AFF] transition">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </HomeSection>
  );
}