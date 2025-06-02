// src/pages/ArticlePage.jsx

import { useParams } from "react-router-dom"; 
import {articles} from "../data/articles"
import PageTitle from "../components/common/PageTitle";

export default function ArticlePage() {

  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return <p>Article non trouvé.</p>;
  }

  return (
    <> 
      <header className="mb-8">
        <PageTitle>{article.title}</PageTitle>
      </header>

      <section className="prose prose-invert max-w-none text-gray-200">
        {/* Ici tu peux rendre du HTML ou du Markdown compilé */}
       
        <p className="text-sm text-gray-400">{article.date}</p>

      </section>
    </>
  );
}