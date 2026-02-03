// src/components/home/BlogPreview.jsx

import HomeSectionWrapper from "./HomeSectionWrapper";
import {articles} from "../../data/articles"

export default function BlogPreview() {

  return (
    <HomeSectionWrapper
      id="blog"
      title="Derniers articles"
      link={{ href: "/blog", text: "Voir tous les articles" }}
    >
      <div className="w-full space-y-4">
        {articles.slice(0, 3).map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </HomeSectionWrapper>
  );
}