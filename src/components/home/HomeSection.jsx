import LinkButton from "../LinkButton";
import SectionTitle from "./SectionTitle";

export default function HomeSection({ id, title, children, link }) {
    return (
      <section id={id} className="bg-[#222222]">
        <div className="flex flex-col items-center pt-8 pb-16 px-3">
          {/* Titre */}
          <SectionTitle>{title}</SectionTitle>
  
          {/* Contenu principal */}
          <div className="w-full">{children}</div>
  
          {/* Lien */}
          {link && (
            <div className="mt-6 text-center">
              <LinkButton to={link.href}>{link.text}</LinkButton>
            </div>
          )}
        </div>
      </section>
    );
  }