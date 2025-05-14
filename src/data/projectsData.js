// src/data/projectsData.js

export const projects = [
    {
        slug: "shogiconnect",
        title: "ShogiConnect",
        description: "Plateforme communautaire dédiée au shogi, avec profils, forum et interface de jeu en ligne.",
        image: "/assets/images/projects/shogiconnect.png",
        technos: ["React", "CSS", "Node", "Socket.io"],
        github: [
        { label: "Client", url: "https://github.com/julienlisita/shogiconnect-client" },
        { label: "API", url: "https://github.com/julienlisita/shogiconnect-api" },
        { label: "Serveur de jeu", url: "https://github.com/julienlisita/shogiconnect-game-server" }
        ],
        demo: [
        { label: "Site principal", url: "#" },
        { label: "Back office", url: "#" }
        ],
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
            deployment: ["Render (API)", "Vercel (client)"]
        }
    },
    {
        slug: "planify",
        title: "Planify",
        description: "Application intuitive pour créer ses propres recettes et organiser ses repas au quotidien.",
        image: "/assets/images/projects/planify.png",
        technos: ["React", "Tailwind", "Node"],
        github: "https://github.com/julienlisita/planify-frontend",
        demo: "#",
        github: [
        { label: "Client", url: "https://github.com/julienlisita/planify-frontend" },
        { label: "API", url: "https://github.com/julienlisita/planify-backend" },
        ],
        demo: [
        { label: "Site principal", url: "#" },
        { label: "Back office", url: "#" }
        ],
        summary: [
            "Planify est un projet de plateforme web collaborative qui permet aux utilisateurs d’accéder un large de choix de recettes de cuisine classées par catégorie, d'interagir avec celles-ci, et de publier leurs propres recettes. Le projet vise également à simplifier la planification des repas hebdomadaires et à encourager la contribution d’articles sur l’actualité culinaire. Le projet s’inscrit dans un contexte de bien-être alimentaire et de convivialité dans le but d’apporter une solution moderne et intuitive pour découvrir de nouvelles idées culinaires et organiser leur repas de façon efficace."
        ],
        features: [
            "Consultation d’un catalogue de recettes classées par catégories (entrées, plats, desserts, etc.).",
            "Création, modification et suppression de recettes personnelles avec photo, ingrédients et étapes détaillées.",
            "Planification hebdomadaire des repas à l’aide d’un calendrier interactif.",
            "Générations de liste de courses.",
            "Recherche de recettes par mots-clés ou par ingrédients.",
            "Ajout de recettes à une liste de favoris pour un accès rapide.",
            "Section blog avec des articles culinaires collaboratifs (nutrition, astuces, tendances)."
],
        stack: {
            frontend: ["React", "React Router", "Tailwind CSS"],
            backend: ["Node.js","Express", "Sequelize", "JWT (JSON Web Token)"],
            database: ["mySQL"],
            test: ["Jest"],
            deployment: ["Render (API)", "Vercel (client)"]
        }
    },
    {
        slug: "portfolio",
        title: "Portfolio React",
        description: "Site vitrine responsive pour présenter mes projets et mes services de développeur.",
        image: "/assets/images/projects/portfolio.png",
        technos: ["React", "Tailwind", "Framer Motion"],
        github: [
        { label: "Client", url: "https://github.com/julienlisita/portfolio-react" },
        ],
        demo: [
        { label: "Site principal", url: "#" }
        ],
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
            frontend: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
            backend: null,
            database: null,
            test: null,
            deployment: ["Netlify"]
        }
    },
];