import Button from "../Button";
import SectionTitle from "../SectionTitle";


export default function HomeSection({ id, title, children, link, className }) {
    return (
      <section id={id} className="bg-[#222222] text-gray-200 scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-20">
        <div className="
          flex flex-col items-center 
          gap-6 m:gap-8 lg:gap-12
          px-4 sm:px-6 lg:px-12">
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