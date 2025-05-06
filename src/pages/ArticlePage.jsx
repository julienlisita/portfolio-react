import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <div>
        <h1>Article : {id}</h1>
        <p>Voici le contenu de l'article {id}...</p>
    </div>
  );
}