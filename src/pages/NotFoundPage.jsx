export default function NotFoundPage() {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">404 - Page Non Trouvée</h1>
        <p className="text-lg text-gray-700">Désolé, la page que vous cherchez n'existe pas.</p>
        <a href="/" className="text-blue-600 underline mt-4 block">Retour à la page d'accueil</a>
      </div>
    );
  }