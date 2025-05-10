import Button from "../LinkButton";
import SectionTitle from "../SectionTitle";


export default function HomeSection({ id, title, children, link }) {
    return (
      <section id={id} className="bg-[#222222]">
        <div className="
          flex flex-col items-center 
          gap-6 m:gap-8 lg:gap-12
          pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-14 lg:pb-14
          px-3 sm:px-5 lg:px-6">
          {/* Titre */}
          <SectionTitle>{title}</SectionTitle>
  
          {/* Contenu principal */}
          {children}
  
          {/* Lien */}
          {link && (
            <div className="flex justify-center items-center my-4 sm:my-5 lg:my-6">
              <Button to={link.href}>{link.text}</Button>
            </div>
          )}
        </div>
      </section>
    );
  }