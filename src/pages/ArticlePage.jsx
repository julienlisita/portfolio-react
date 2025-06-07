// src/pages/ArticlePage.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import frontMatter from "front-matter";
import { articles } from "../data/articles";
import PageTitle from "../components/common/PageTitle";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    fetch(`/content/blog/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Fichier introuvable");
        return res.text();
      })
      .then((text) => {
        const { body } = frontMatter(text);
        setMarkdown(body);
        setError(false);
      })
      .catch(() => {
        setMarkdown("");
        setError(true);
      });
  }, [slug]);

  if (!article) {
    return <p className="text-red-400">Article non trouvé.</p>;
  }

  return (
    <>
      <header className="mb-8">
        <PageTitle>{article.title}</PageTitle>
        <p className="mt-4 text-sm text-gray-400">{article.date}</p>
      </header>

      <section className="prose prose-invert max-w-none text-gray-200">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </>
  );
}