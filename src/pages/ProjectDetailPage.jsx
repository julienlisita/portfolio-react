import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function ProjectDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Header/>
      <h1>Détails du projet : {id}</h1>
      <p>Voici les détails du projet {id}...</p>
    </div>
  );
}