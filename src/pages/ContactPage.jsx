// src/pages/ContactPage.jsx

import ContactForm from "../components/common/ContactForm";
import { Mail, Phone, Car, MapPin} from "lucide-react";
import { LuLinkedin, LuGithub } from 'react-icons/lu';
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact</PageTitle>

      {/* Formulaire de contact*/}
      <Section title="M'envoyer un mail">
        <p className="text-left max-w-2xl mx-auto">
        Je suis toujours ravi de discuter de nouveaux projets ou d’échanger des idées. N’hésitez pas à me contacter pour discuter de vos besoins. Je suis basé à Mérignac, près de Bordeaux, et je suis toujours à la recherche de nouveaux défis. J’aime collaborer avec mes clients pour comprendre leurs besoins et leur fournir des solutions personnalisées qui répondent à leurs objectifs.
        </p>
        <div className="mt-8 sm:mt-10 lg:mt-12 w-full flex justify-center">
          <ContactForm/>
        </div>
      </Section>  
      
      {/* Informations de contact */}
      <Section title="Mes coordonnées">
        <div className="flex justify-center">
          <div className="w-full m-x-auto grid grid-cols-1 sm:grid-cols-2 max-w-2xl gap-y-8">
            <div className="flex items-start gap-3">
              <Phone className="text-[#5AC8FA]" />
              <a href="tel:+33612345678" className="hover:underline">+33 6 23 00 04 49</a>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-[#5AC8FA]" />
              <a href="mailto:julien@example.com" className="hover:underline">julien.lisita@gmail.com</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-[#5AC8FA]" />
              <span>33700 Mérignac</span>
            </div>
            <div className="flex items-start gap-3">
              <Car className="text-[#5AC8FA]" />
              <span>Permis B, véhiculé</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Carte Google Maps */}
      <Section className="flex justify-center mx-auto max-w-2xl">
        <iframe
          title="Carte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90544.70913754782!2d-0.8377950902134641!3d44.83129852447797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54da1f33de99fd%3A0x1c06651a91af85b0!2s33700%20M%C3%A9rignac!5e0!3m2!1sfr!2sfr!4v1747995234719!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </Section>

      {/*Réseaux sociaux*/}
      <Section className="flex justify-center gap-20">
        <a
          href="https://www.linkedin.com/in/julienlisita"
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 py-1 hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]"
        >
          <LuLinkedin size={40} />
        </a>
        <a
          href="https://github.com/julienlisita"
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 py-1 hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]"
        >
          <LuGithub size={40} />
        </a>
      </Section>
    </>
  );
}