// src/pages/ContactPage.jsx

import ContactForm from "../components/common/ContactForm";
import { Mail, Phone} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LuLinkedin, LuGithub, LuFacebook } from 'react-icons/lu';
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact</PageTitle>

      {/* Formulaire de contact*/}
      <Section title="M'envoyer un mail ">
        <p className="text-left text-base sm:text-lg lg:text-xl">
        Je suis toujours ravi de discuter de nouveaux projets ou d’échanger des idées. N’hésitez pas à me contacter pour discuter de vos besoins. Je suis basé à Mérignac, près de Bordeaux, et je suis toujours à la recherche de nouveaux défis. J’aime collaborer avec mes clients pour comprendre leurs besoins et leur fournir des solutions personnalisées qui répondent à leurs objectifs.
        </p>
        <div className="mt-10 sm:mt-12 lg:mt-14 w-full flex justify-center">
          <ContactForm/>
        </div>
      </Section>  
      
      {/* Informations de contact */}
      <Section title="Mes coordonnées" className="text-base sm:text-lg lg:text-xl">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="text-[#007AFF]" />
              <a href="tel:+33612345678" className="hover:underline">06 23 00 04 49</a>
            </div>
            <div className="flex items-start gap-3">
              <FaWhatsapp className="text-green-500" size={24} />
              <a
                href="https://wa.me/33623000449?text=Bonjour%20Julien%2C%20je%20souhaite%20des%20informations%20sur%20la%20création%20d%27un%20site%20internet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Discuter sur WhatsApp
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-[#007AFF]" />
              <a href="mailto:contact@julienlisita.com" className="hover:underline">contact@julienlisita.com</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Localisation */}
      <Section title="Localisation" className="text-base sm:text-lg lg:text-xl">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl px-4 space-y-3">
            <div className="text-center leading-relaxed">
              <p >Mérignac - Bordeaux Métropole</p>
              <p>
                À distance partout en France 
              </p>
              <p>
                Déplacements possibles en Gironde sur demande
              </p>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Carte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3707843589267!2d-0.6778420236379075!3d44.82758167107082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d9e123456789%3A0xabcdef123456789!2s12%20Av.%20Pierre%20Mend%C3%A8s%20France%2C%2033700%20M%C3%A9rignac!5e0!3m2!1sfr!2sfr!4v1735577600000!5m2!1sfr!2sfr"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      {/*Réseaux sociaux*/}
      <Section className="flex justify-center gap-20">
        <a 
        href="https://www.facebook.com/profile.php?id=61584478395151" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-1 py-1 hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]"
        >
            <LuFacebook size={40}/>
        </a>
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