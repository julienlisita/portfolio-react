import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="text-white pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      <PageTitle>A propos</PageTitle>
      {/* Photo + Intro */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-8 sm:mt-10 lg:mt-12 max-w-3xl m-auto">
        <img
          src="src/assets/images/profile-pic.png" 
          alt="Julien Lisita"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="text-left lg:text-left">
          <p className="text-3xl sm:text-4xl font-bold">Julien Lisita</p>
          <p className="text-[#5AC8FA] text-xl mt-2">Développeur Full Stack Freelance</p>
          <p className="text-gray-300 mt-4 ">
            Passionné par le développement web et motivé par l'envie de créer des outils utiles,
            je conçois des applications modernes, performantes et sur mesure. Basé à Mérignac, je travaille à distance ou sur site.
          </p>
        </div>
      </div>

      {/* Parcours */}
      <div>
        <SectionTitle>Mon parcours</SectionTitle>
        <p className="text-gray-300 mt-8 sm:mt-10 lg:mt-12 max-w-3xl m-auto">
          Après une première carrière dans l’ingénierie, j’ai choisi de me reconvertir dans le développement web.
          J’ai suivi un bootcamp intensif en développement full stack, où j’ai pu consolider mes compétences en JavaScript,
          React et Node.js. Depuis, je développe des projets concrets en freelance et en auto-formation continue.
        </p>
        <p className="text-gray-300 mt-4 sm:mt-6 lg:mt-8 max-w-3xl m-auto">
          Vous pouvez télécharger mon CV pour obtenir un aperçu complet de mon parcours professionnel.
        </p>
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Button
          href="/assets/docs/CV-Julien-Lisita.pdf"
          download
          >
          Télécharger mon CV
          </Button>
        </div>
      </div>

      {/* Témoignages (optionnel) */}
      {/* <div>
        <SectionTitle>Témoignages</SectionTitle>
        <blockquote className="text-gray-400 italic mt-4">
          "Julien a su comprendre notre besoin rapidement et livrer un site impeccable, dans les temps. Je recommande à 100%."
          <br /> — Client satisfait
        </blockquote>
      </div> */}
    </section>
  );
}