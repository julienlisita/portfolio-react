import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProjectDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails du projet : {id}</h1>
      <p>Voici les détails du projet {id}...</p>
    </div>
  );
}