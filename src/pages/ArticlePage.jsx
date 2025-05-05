import { useParams } from 'react-router-dom';

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Article : {id}</h1>
      <p>Voici le contenu de l'article {id}...</p>
    </div>
  );
}