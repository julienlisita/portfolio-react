import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin, Car, Linkedin, Github } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import PageTitle from "../components/PageTitle";

export default function ContactPage() {
  return (
    <section className="
            bg-[#222222] text-white
              pt-14 sm:pt-16 lg:pt-20 
              flex flex-col items-center
              pb-16 sm:pb-20 lg:pb-24">
      <PageTitle>Contact</PageTitle>
      <SectionTitle>M'envoyer un mail</SectionTitle>
      <p className="text-left text-gray-300 mt-8 sm:mt-10 lg:mt-12 ">
       Je suis toujours ravi de discuter de nouveaux projets ou d’échanger des idées. N’hésitez pas à me contacter pour discuter de vos besoins. Je suis basé à Mérignac, près de Bordeaux, et je suis toujours à la recherche de nouveaux défis. J’aime collaborer avec mes clients pour comprendre leurs besoins et leur fournir des solutions personnalisées qui répondent à leurs objectifs.
      </p>
      {/* Formulaire de contact*/}
      <div className="mt-8 sm:mt-10 lg:mt-12 w-full flex justify-center">
        <ContactForm/>
      </div>
      
      <SectionTitle>Mes coordonnées</SectionTitle>
      {/* Informations de contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-8">
        <div className="flex items-center gap-3">
          <Phone className="text-[#5AC8FA]" />
          <a href="tel:+33612345678" className="hover:underline">+33 6 23 00 04 49</a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-[#5AC8FA]" />
          <a href="mailto:julien@example.com" className="hover:underline">julien.lisita@gmail.com</a>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-[#5AC8FA]" />
          <span>12 Avenue Pierre Mendes-France,<br/> 33700 Mérignac</span>
        </div>

        <div className="flex items-center gap-3">
          <Car className="text-[#5AC8FA]" />
          <span>Permis B</span>
        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="mt-8 sm:mt-10 lg:mt-12 w-full max-w-2xl">
        <iframe
          title="Carte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5658.489127789495!2d-0.6432714239088505!3d44.836952575070896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d9cce052920f%3A0xa7ac072c9c8fdc71!2s12%20Av.%20Pierre%20Mend%C3%A8s-France%2C%2033700%20M%C3%A9rignac!5e0!3m2!1sfr!2sfr!4v1746956319863!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
    </div>
      {/*Réseaux sociaux*/}
      <div className="flex items-center gap-5 mt-8 sm:mt-10 lg:mt-12">
        <a
          href="https://www.linkedin.com/in/ton-profil"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#007AFF]"
        >
          <Linkedin size={40} />
        </a>
        <a
          href="https://github.com/ton-pseudo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9B59B6]"
        >
          <Github size={40} />
        </a>
      </div>
    </section>
  );
}