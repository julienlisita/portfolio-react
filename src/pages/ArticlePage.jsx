import { useParams } from "react-router-dom"; 
import {articles} from "../data/articles"
import PageTitle from "../components/PageTitle";

export default function ArticlePage() {

  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return <p className="text-white">Article non trouvé.</p>;
  }

  return (
    <article className="pt-14 sm:pt-16 lg:pt-20 ">
      <header className="mb-8">
        <PageTitle>{article.title}</PageTitle>
      </header>

      <section className="prose prose-invert max-w-none text-gray-300">
        {/* Ici tu peux rendre du HTML ou du Markdown compilé */}
       
        <p className="text-sm text-gray-400">{article.date}</p>

      </section>
    </article>
  );
}