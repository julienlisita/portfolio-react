// src/pages/ContactPage.jsx

import ContactForm from "../components/common/ContactForm";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LuLinkedin, LuGithub, LuFacebook } from "react-icons/lu";
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact</PageTitle>

      <Section title="Discutons de vos besoins">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-3">
          {/* Colonne gauche : intro + formulaire */}
          <div className="lg:col-span-2">
            <p className="text-left text-base sm:text-lg lg:text-xl">
              Je suis toujours ravi de discuter de nouveaux projets ou d’échanger des idées.
              N’hésitez pas à me contacter pour discuter de vos besoins. Je suis basé à Mérignac,
              près de Bordeaux, et je suis toujours à la recherche de nouveaux défis. J’aime
              collaborer avec mes clients pour comprendre leurs besoins et leur fournir des
              solutions personnalisées qui répondent à leurs objectifs.
            </p>

            <div className="mt-10 sm:mt-12 lg:mt-14">
              <ContactForm />
            </div>
          </div>

          {/* Colonne droite : infos */}
          <aside className="lg:col-span-1 space-y-6">
           {/* Coordonnées */}
            <div className="bg-[#2a2a2a] rounded-2xl p-6 text-base sm:text-lg">
              <h3 className="text-white font-semibold text-lg mb-5">
                Mes coordonnées
              </h3>

              <div className="space-y-3">
                {/* Téléphone */}
                <div className="flex items-center gap-3">
                  <Phone className="text-[#007AFF]" />
                  <a
                    href="tel:+33623000449"
                    className="font-medium hover:text-[#5AC8FA] transition"
                  >
                    06 23 00 04 49
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-[#007AFF]" size={22} />
                  <a
                    href="https://wa.me/33623000449?text=Bonjour%20Julien%2C%20je%20souhaite%20des%20informations%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20internet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5AC8FA] transition"
                  >
                    Discuter sur WhatsApp
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="text-[#007AFF]" />
                  <a
                    href="mailto:contact@julienlisita.com"
                    className="font-medium hover:text-[#5AC8FA] transition"
                  >
                    contact@julienlisita.com
                  </a>
                </div>
              </div>
            </div>

            {/* Localisation */}
            <div className="bg-[#2a2a2a] rounded-2xl p-6 text-base sm:text-lg">
              <h3 className="text-white font-semibold text-lg mb-4">Localisation</h3>
              <div className="space-y-2 text-gray-200 leading-relaxed">
                <p>Mérignac - Bordeaux Métropole</p>
                <p>À distance partout en France</p>
                <p>Déplacements possibles en Gironde sur demande</p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-[#2a2a2a] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Réseaux</h3>
              <div className="flex justify-between px-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61584478395151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 py-1 hover:outline hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]"
                >
                  <LuFacebook size={34} />
                </a>

                <a
                  href="https://www.linkedin.com/in/julienlisita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 py-1 hover:outline hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]"
                >
                  <LuLinkedin size={34} />
                </a>

                <a
                  href="https://github.com/julienlisita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 py-1 hover:outline hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]"
                >
                  <LuGithub size={34} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Carte Google Maps : en full width en dessous */}
      <Section title="Carte">
        <div className="rounded-2xl shadow-lg overflow-hidden">
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
          />
        </div>
      </Section>
    </>
  );
}