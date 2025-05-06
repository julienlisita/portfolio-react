import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PortfolioPage() {
    return (
      <div>
        <h1>Mes Projets</h1>
        <p>Voici mes projets récents :</p>
        <ul>
          <li><a href="/portfolio/projet-1">Projet 1</a></li>
          <li><a href="/portfolio/projet-2">Projet 2</a></li>
        </ul>
      </div>
    );
  }