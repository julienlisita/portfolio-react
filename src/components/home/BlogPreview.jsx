import HomeSection from "./HomeSection";

export default function BlogPreview() {
  const articles = [
    {
      title: "L'IA va-t-elle remplacer le métier de développeur ?",
      excerpt:
        "Avec l'émergence de l'IA générative, la question se pose sérieusement. Mais entre automatisation des tâches et créativité humaine, la réalité est plus nuancée qu'il n'y paraît.",
      date: "7 mai 2025",
      link: "/blog/ia-remplacera-dev",
    },
    {
      title: "Comprendre le State dans React",
      excerpt:
        "Une exploration claire du state local, global, du lifting state up et des bonnes pratiques pour gérer efficacement les flux de données dans vos composants.",
      date: "5 mai 2025",
      link: "/blog/comprendre-le-state-react",
    },
    {
      title: "Pourquoi utiliser Tailwind CSS",
      excerpt:
        "Avec son approche utilitaire, Tailwind CSS offre une productivité accrue et un design cohérent, tout en restant très personnalisable.",
      date: "10 avril 2025",
      link: "/blog/pourquoi-tailwind-css",
    },
  ];

  return (
    <HomeSection
      id="blog"
      title="Derniers articles"
      link={{ href: "/blog", text: "Voir le blog" }}
    >
      <div className="space-y-4 mt-8">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="block bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333] transition group"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 rounded h-full bg-gradient-to-b from-[#9B59B6] to-[#007AFF] blur-[4px]" />
              <div>
                <p className="text-xs text-gray-400">{article.date}</p>
                <h3 className="text-white font-semibold text-lg group-hover:text-[#007AFF] transition">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-[#007AFF] transition">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </HomeSection>
  );
}