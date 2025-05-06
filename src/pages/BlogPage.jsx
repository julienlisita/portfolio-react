import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BlogPage() {
    return (
      <div>
        <h1>Mon Blog</h1>
        <p>Derniers articles publiés :</p>
        <ul>
          <li><a href="/blog/article-1">Article 1</a></li>
          <li><a href="/blog/article-2">Article 2</a></li>
        </ul>
      </div>
    );
  }