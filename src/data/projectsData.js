// src/data/projectsData.js

export const projects = [
    {
    slug: "lumiere-darcachon",
    title: "Lumière d’Arcachon",
    category: "web",
    description:
        "Projet personnel mêlant photographie et développement web : un site éditorial dédié aux lumières du Bassin d’Arcachon.",
    image: "/assets/images/projects/lumieredarcachon.png", 
    technos: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveSite: "https://lumieredarcachon.fr", 
    sourceCode: [
        {
        label: "Site",
        url: "https://github.com/julienlisita/lumieredarcachon",
        },
    ],
    demo: null,
    summary: [
        "Lumière d’Arcachon est un projet personnel né de ma passion pour la photographie et le Bassin d’Arcachon. Il s’agit d’un site éditorial et photographique mettant en valeur les ambiances lumineuses du littoral à travers une galerie soignée et un carnet d’articles.",
        "Ce projet me permet également de démontrer mes compétences en développement web moderne : architecture claire, composants réutilisables, accessibilité, performance et expérience utilisateur. Il a vocation à évoluer vers une plateforme plus complète (journal enrichi, navigation avancée, éventuellement espace communautaire).",
    ],
    features: [
        "Galerie photographique immersive avec lightbox plein écran",
        "Filtres par ambiances lumineuses et par lieux",
        "Pagination optimisée côté client",
        "Carnet d’articles (journal) autour des spots, ambiances et pratiques photo",
        "Design sobre et élégant avec mode clair / sombre",
        "Navigation fluide et animations discrètes",
        "Site responsive (mobile → desktop)",
        "Structure évolutive pensée pour de futurs contenus",
    ],
    stack: {
        frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
        backend: null,
        database: null,
        test: null,
        deployment: ["Vercel"],
    },
    },
    {
    slug: "thomas-delaunay",
    title: "Thomas Delaunay Coaching",
    category: "web",
    description:
        "Application web complète : site vitrine moderne, réservation en ligne et espace administrateur sécurisé pour la gestion des créneaux.",
    image: "/assets/images/projects/thomas-delaunay.png",
    technos: ["Next.js", "TypeScript", "Prisma"],
    liveSite: "https://thomas-delaunay-coaching.vercel.app",
    sourceCode: [
        { label: "Client & Serveur", url: "https://github.com/julienlisita/thomas-delaunay-website.git" }
    ],
    demo: null,
    summary: [
        "Plateforme fullstack construite pour un coach sportif et nutrition : présentation de l’activité, prise de rendez-vous automatisée et gestion interne.",
        "L’utilisateur peut réserver un créneau en temps réel, reçoit un email de confirmation, tandis que l’administrateur gère les créneaux, les réservations et ses paramètres via un back-office sécurisé.",
    ],
    features: [
        "Site vitrine moderne : Accueil, À propos, Programmes, Témoignages, Contact",
        "Système de réservation en ligne : créneaux disponibles, validation automatique, email de confirmation client + email interne admin",
        "Espace administrateur sécurisé (authentification JWT)",
        "Gestion des créneaux : création, activation/désactivation, suppression, détection des conflits",
        "Gestion des réservations : consultation, filtrage, annulation",
        "Sécurité : server actions sécurisées, validation Zod, anti-spam (honeypot), rate limiting",
        "Emails transactionnels via Brevo (confirmation client + notification admin)",
        "Backend Next.js App Router + Prisma (PostgreSQL)",
        "Design responsive, animations Framer Motion",
        "Architecture extensible pouvant évoluer en plateforme multi-coachs",
    ],
    stack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        backend: ["Next.js Server Actions", "Prisma", "JWT Authentication"],
        database: ["PostgreSQL"],
        deployment: ["Vercel"],
        emails: ["Brevo (Mail Transactionnel)"],
    },
    clientType: "Coach sportif & nutrition",
    context: "Objectif : automatiser la réservation et centraliser la gestion via un espace admin.",
    goals: [
    "Permettre la réservation en ligne en temps réel",
    "Réduire les échanges manuels (emails / créneaux)",
    "Donner un back-office simple pour gérer créneaux et réservations",
    ],
    results: [
    "Réservation + confirmations email automatisées",
    "Back-office sécurisé pour gérer créneaux et réservations",
    "Solution prête à évoluer vers une plateforme multi-coachs",
    ],
    myRole: "Conception, développement fullstack, sécurité, emailing transactionnel, déploiement.",
},
{
    slug: "ccs",
    title: "Compagnie Care & Services",
    category: "vitrines",
    description:
        "Site professionnel pour une entreprise d’aide à domicile, incluant pages informatives, actualités, formulaire de contact et candidature avec CV.",
    image: "/assets/images/projects/ccs.jpg",
    technos: ["Next.js", "TypeScript", "Tailwind"],
    liveSite: "https://compagnie-careandservices.vercel.app",
    sourceCode: [
        { label: "Client", url: "https://github.com/julienlisita/ccs-website.git" }
    ],
    demo: null,
    summary: [
        "Site vitrine complet destiné à une entreprise d’aide à domicile opérant en Charente et Gironde. L’accent est mis sur la clarté, la confiance et l’accessibilité, avec des contenus structurés pour des publics variés : bénéficiaires, familles, partenaires et candidats.",
        "Bien que le site soit statique (sans interface d’administration), il inclut plusieurs formulaires dynamiques, dont un espace Recrutement permettant d’envoyer une candidature avec CV joint. Le site est entièrement responsive et pensé pour être facilement maintenu."
    ],
    features: [
        "7 pages : Accueil, À propos, Services, Informations légales, Actualités, Recrutement, Contact",
        "Formulaire de contact complet avec validation et envoi email",
        "Formulaire de candidature avec upload de CV (PDF/Doc) et message personnalisé",
        "Page Actualités permettant de présenter des articles externes ou internes",
        "Présentation des valeurs de l’entreprise et de la zone d’intervention",
        "Design lisible et accessible pour un public senior",
        "Composants UI réutilisables : Header, Footer, Section, Cards, Buttons",
        "Optimisation SEO de base : titres, meta descriptions, balises structurées",
        "Responsive design mobile → desktop"
    ],
    stack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["Next.js Server Actions (formulaire contact & recrutement)"],
        database: null,
        test: null,
        deployment: ["Vercel"]
    },
    clientType: "Entreprise d’aide à domicile (Charente & Gironde)",
    context: "Objectif : inspirer confiance, clarifier les services et faciliter la prise de contact + recrutement.",
    goals: [
    "Présenter clairement l’activité et la zone d’intervention",
    "Rassurer un public varié (bénéficiaires, familles, partenaires)",
    "Faciliter les demandes via formulaire + candidatures avec CV",
    ],
    results: [
    "Navigation plus claire par profils (familles / bénéficiaires / candidats)",
    "Formulaires fiables (contact + candidature avec pièces jointes)",
    "Base SEO propre + site responsive, lisible et accessible",
    ],
    myRole: "Design UI, intégration, développement des formulaires, optimisation perf/SEO, déploiement.",
},
    {
        slug: "brunchbordelais",
        title: "Le Brunch Bordelais",
        category: "vitrines",
        description: "Site vitrine moderne et chaleureux conçu pour présenter l’univers culinaire et l’ambiance du restaurant.",
        image: "/assets/images/projects/brunchbordelais.avif",
        technos: ["Next.js", "JavaScript", "Tailwind"],
        liveSite: "https://le-brunch-bordelais.vercel.app",
        sourceCode: [
        { label: "Client", url: "https://github.com/julienlisita/le-brunch-bordelais" },
        ],
        demo: null,
        summary: [
        "Site vitrine moderne conçu pour un restaurant bordelais, avec un soin particulier apporté à l’identité visuelle, à l’ergonomie et à l’expérience utilisateur.",
        "La page d’accueil est structurée en sections claires — présentation du concept, engagements, ambiance, témoignages et informations pratiques — afin d'offrir une navigation fluide et une mise en avant efficace du positionnement du restaurant."
        ],
        features: ["Présentation responsive et structurée du restaurant avec une navigation fluide entre les sections.",
            "Mise en avant du concept, des engagements (produits locaux, faits maison), de l’ambiance et des spécialités proposées.",
            "Section témoignages pour renforcer la crédibilité et créer une connexion émotionnelle.",
            "Bloc “infos pratiques” clair : horaires, adresse, téléphone, bouton de contact et carte intégrée.",
            "Formulaire de contact accessible depuis une page dédiée pour les demandes de réservation ou d’information."
        ],
        stack: {
            frontend: ["JavaScript","NextJS", "Tailwind CSS"],
            backend: null,
            database: null,
            test: null,
            deployment: ["Vercel"]
        }
    },
    {
        slug: "shogiconnect",
        title: "ShogiConnect",
        category: "web",
        description: "Plateforme communautaire dédiée au shogi, avec profils, forum et interface de jeu en ligne.",
        image: "/assets/images/projects/shogiconnect.png",
        technos: ["React", "Node.js", "Sequelize"],
        liveSite: "https://shogiconnect.netlify.app",
        sourceCode: [
        { label: "Client", url: "https://github.com/julienlisita/shogiconnect-client" },
        { label: "API", url: "https://github.com/julienlisita/shogiconnect-api" },
        { label: "Serveur de jeu", url: "https://github.com/julienlisita/shogiconnect-game-server" }
        ],
        demo: null,
        summary: [
            "ShogiConnect est une plateforme communautaire autour du Shogi, le jeu d’échecs japonais. Elle permet aux utilisateurs de découvrir le jeu, de se former à ses règles, et de rejoindre une communauté active. Le site propose des profils utilisateurs, un forum de discussion, un annuaire des clubs français, ainsi qu’une interface de jeu en ligne en temps réel permettant à deux joueurs de s’affronter. Cette application vise à démocratiser la pratique du Shogi en France, tout en proposant des fonctionnalités interactives adaptées aussi bien aux débutants qu’aux passionnés.",
            "L’une des fonctionnalités clés de ShogiConnect est la possibilité pour les utilisateurs ayant crée un compte de jouer en ligne contre d’autres membres. Un système de rendez-vous permet de planifier des parties à des dates et heures convenues, un membre peut donc proposer une partie visible par les autres membres qui pourront s’y inscrire. Pour renforcer cette communauté, une section forum permet aux utilisateurs d’échanger sur des sujets relatifs au jeu classés par catégorie comme les analyses de partie ou les clubs et tournois. Chaque utilisateur possède un profil personnel visible par les autres membres, comprenant des informations telles qu’une biographie, le pays, un avatar, son activité sur le site ainsi que ses résultats en tant que joueur. L’objectif principal est de donner une dimension sociale et interactive au site."
        ],
        features: [
            "Inscription et authentification sécurisée (JWT)",
            "Profils utilisateurs publics avec bio, avatar et historique",
            "Forum communautaire structuré par catégories",
            "Jeu en ligne en temps réel via WebSocket",
            "Planification de parties avec système d’annonce",
            "Annuaire des clubs français",
            "Responsive design (desktop, tablette, mobile)"
        ],
        stack: {
            frontend: ["React", "React Router", "CSS"],
            backend: ["Node.js","Express", "Sequelize", "Axios", "JWT (JSON Web Token)", "Socket.io"],
            database: ["mySQL"],
            test: ["Postman"],
            deployment: ["Railway (API + BDD)", "Netlify (client)"]
        }
    },
    {
        slug: "portfolio",
        title: "Julien Lisita – Site professionnel",
        category: "vitrines",
        description: "Site vitrine responsive pour présenter mes projets et mes services de développeur.",
        image: "/assets/images/projects/portfolio.png",
        technos: ["React", "Tailwind", "Framer Motion"],
        liveSite: "https://julienlisita.com",
        sourceCode: [
        { label: "Client", url: "https://github.com/julienlisita/portfolio-react" },
        ],
        demo: null,
        summary: [
            "Ce portfolio a pour objectif de présenter mon parcours, mes compétences et mes projets en tant que développeur web full stack. Il vise à offrir une vitrine professionnelle claire, moderne et évolutive, que ce soit pour des recruteurs, des entreprises ou des clients potentiels. L’accent est mis à la fois sur l’ergonomie, l’accessibilité et la qualité du code."
        ],
        features: [
            "Présentation claire et responsive du parcours, des services et des compétences techniques.",
            "Affichage dynamique des projets avec description détaillée, visuels, stacks utilisés et liens vers le code source.",
            "Section blog intégrée pour partager des articles autour du développement web et des retours d’expérience.",
            "Formulaire de contact pour faciliter la prise de contact professionnelle."
        ],
        stack: {
            frontend: ["Javascript", "React", "Tailwind CSS", "Framer Motion"],
            backend: null,
            database: null,
            test: null,
            deployment: ["Netlify"]
        }
    },
//     {
//         slug: "planify",
//         title: "Planify",
//         category: "web",
//         description: "Application intuitive pour créer ses propres recettes et organiser ses repas au quotidien.",
//         image: "/assets/images/projects/planify.avif",
//         technos: ["React", "Node.js", "Tailwind"],
//         liveSite: null,
//         sourceCode: [
//         { label: "Client", url: "https://github.com/julienlisita/planify-frontend" },
//         { label: "API", url: "https://github.com/julienlisita/planify-backend" },
//         ],
//         demo: null,
//         summary: [
//             "Planify est un projet de plateforme web collaborative qui permet aux utilisateurs d’accéder un large de choix de recettes de cuisine classées par catégorie, d'interagir avec celles-ci, et de publier leurs propres recettes. Le projet vise également à simplifier la planification des repas hebdomadaires et à encourager la contribution d’articles sur l’actualité culinaire. Le projet s’inscrit dans un contexte de bien-être alimentaire et de convivialité dans le but d’apporter une solution moderne et intuitive pour découvrir de nouvelles idées culinaires et organiser leur repas de façon efficace."
//         ],
//         features: [
//             "Consultation d’un catalogue de recettes classées par catégories (entrées, plats, desserts, etc.).",
//             "Création, modification et suppression de recettes personnelles avec photo, ingrédients et étapes détaillées.",
//             "Planification hebdomadaire des repas à l’aide d’un calendrier interactif.",
//             "Générations de liste de courses.",
//             "Recherche de recettes par mots-clés ou par ingrédients.",
//             "Ajout de recettes à une liste de favoris pour un accès rapide.",
//             "Section blog avec des articles culinaires collaboratifs (nutrition, astuces, tendances)."
// ],
//         stack: {
//             frontend: ["React", "React Router", "Tailwind CSS"],
//             backend: ["Node.js","Express", "Sequelize", "JWT (JSON Web Token)"],
//             database: ["mySQL"],
//             test: null,
//             deployment: null
//         }
//     },
];