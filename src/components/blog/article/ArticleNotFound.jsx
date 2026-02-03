// src/components/blog/article/ArticleNotFound.jsx

import Section from "../../layout/Section";
import { Link } from "react-router-dom";

export default function ArticleNotFound() {
  return (
    <Section>
      <p className="text-gray-300">Article non trouvé.</p>
      <p className="mt-4">
        <Link to="/blog" className="text-blue-400 underline">
          ← Retour au blog
        </Link>
      </p>
    </Section>
  );
}