// src/components/services/ServicesMethod.jsx

import Section from "../common/Section";
import Button from "../common/Button";

const steps = [
  { t: "Échange initial", d: "nous discutons de vos besoins, de vos envies et de vos priorités." },
  { t: "Conception", d: "je vous conseille sur la structure et le design, avec un plan clair." },
  { t: "Développement", d: "je développe votre site et je vous montre l’avancement régulièrement." },
  { t: "Mise en ligne", d: "votre site est prêt, accessible à vos clients et optimisé pour tous les supports." },
  { t: "Suivi & maintenance", d: "je reste disponible pour des mises à jour ou des évolutions." },
];

export default function ServicesMethod() {
  return (
    <Section id="method" title="Ma méthode de travail" className="text-base sm:text-lg lg:text-xl">
      <p>Un parcours simple et transparent, avec des points de validation à chaque étape.</p>

      <p className="text-sm text-gray-400 mt-2">
        Pour les plus curieux, je détaille mon approche et mes choix techniques ici :{" "}
        <Button variant="text" to="/comment-je-travaille">
          voir comment je travaille ›
        </Button>
      </p>

      <div className="relative mt-6">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2f2f2f]" />

        {steps.map((s, i) => (
          <div key={s.t} className="pl-12 pb-6">
            <div className="relative">
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2a2a2a] text-[#007AFF] text-xs font-semibold">
                {i + 1}
              </span>
              <h4 className="text-gray-100 font-semibold">{s.t}</h4>
            </div>
            <p className="text-gray-400 text-sm mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}