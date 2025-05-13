import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default function ServicesPage()
{
    return (
         <section className="text-white pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
              <PageTitle>Services</PageTitle>
        
              {/*Type de projets */}
             <SectionTitle>Type de projets</SectionTitle>
        
              <div className="text-gray-300 mt-8 sm:mt-10 lg:mt-12 space-y-8">
        
                {/* 1. Applications web front-end */}
                <div>
                  <h3 className="text-lg font-semibold text-white">1. Applications web front-end</h3>
                  <p className="mt-2 text-gray-300">
                    Développement d’interfaces interactives avec React (ou un autre framework JS moderne), en mettant l’accent sur l’expérience utilisateur.
                    Idéal pour les dashboards, les front-ends d’applications SaaS ou les prototypes dynamiques.
                    Déploiement compris sur des plateformes comme Netlify ou Vercel.
                  </p>
                </div>
        
                {/* 2. Développement back-end & API */}
                <div>
                  <h3 className="text-lg font-semibold text-white">2. Développement back-end & API</h3>
                  <p className="mt-2 text-gray-300">
                    Création de back-ends robustes avec Node.js/Express ou d’API REST/GraphQL sur mesure.
                    Intégration de bases de données (MongoDB, PostgreSQL...), gestion de la logique métier, authentification, sécurité et administration.
                    Le service inclut la mise en production (VPS, hébergement cloud...) selon vos besoins.
                  </p>
                </div>
        
                {/* 3. Applications full stack */}
                <div>
                  <h3 className="text-lg font-semibold text-white">3. Applications full stack</h3>
                  <p className="mt-2 text-gray-300">
                    De l’idée à la mise en ligne : développement complet de votre application web (front + back).
                    Travail en itérations, livrables réguliers, déploiement final (hébergement, configuration du domaine, HTTPS...).
                    Idéal pour les entrepreneurs souhaitant un accompagnement global.
                  </p>
                </div>
        
                {/* 4. Développement SaaS & logiciels web avancés */}
                <div>
                  <h3 className="text-lg font-semibold text-white">4. Développement SaaS & logiciels web avancés</h3>
                  <p className="mt-2 text-gray-300">
                    Pour des projets complexes tels que plateformes SaaS, jeux en ligne, ou outils métiers personnalisés :
                    architecture serveur, logique métier, gestion multi-utilisateurs, WebSocket, C++/Java côté serveur...
                    Le déploiement et la configuration d’environnements adaptés sont inclus.
                  </p>
                </div>
        
                {/* 5. Maintenance évolutive & suivi post-livraison */}
                <div>
                  <h3 className="text-lg font-semibold text-white">5. Maintenance évolutive & suivi post-livraison</h3>
                  <p className="mt-2 text-gray-300">
                    Une fois votre application en ligne, je vous propose un service de maintenance évolutive pour garantir sa pérennité.
                    Cela inclut la correction de bugs, les mises à jour régulières, l'ajout de nouvelles fonctionnalités et l’amélioration continue des performances.
                    Un suivi technique est également possible pour adapter votre application à vos besoins au fil du temps.
                  </p>
                </div>
              </div>
        </section>
    )
}