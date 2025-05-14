import PageTitle from "../components/PageTitle";

export default function NotFoundPage() {
    return (
      <div className="h-screen pt-14 sm:pt-16 lg:pt-20 text-center py-10 bg-[#222222]">
        <PageTitle>404 - Page Non Trouvée</PageTitle>
        <p className="text-lg text-gray-300 mt-4">Désolé, la page que vous cherchez n'existe pas.</p>
        <a href="/" className="text-blue-600 underline mt-4 block">Retour à la page d'accueil</a>
      </div>
    );
  }