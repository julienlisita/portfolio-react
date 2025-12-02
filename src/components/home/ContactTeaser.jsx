// src/components/home/ContactTeaser.jsx

import { Mail, MapPin, Phone, Car } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HomeSection from "./HomeSection";

export default function ContactTeaser()
{
    return (
        <HomeSection
            id="contact"
            title="Parlons de votre projet "
            link={{href:"/contact", text:"Formulaire de contact"}}
        > 
            <p className="text-base sm:text-lg lg:text-xl">
            Une question, un projet à discuter ou un devis à demander ?<br/>
                Contactez-moi facilement par mail, téléphone ou via le formulaire.  
            </p>
            {/* Coordonnées rapides */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 text-base text-center">
                {/* Téléphone */}
                <div className="flex flex-col items-center gap-2">
                    <Phone className="text-[#007AFF]" size={32} aria-hidden />
                    <a href="tel:+33623000449" className="hover:underline font-medium">
                    06 23 00 04 49
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center gap-2">
                    <FaWhatsapp className="text-green-500" size={32} aria-hidden />
                    <a
                    href="https://wa.me/33623000449?text=Bonjour%20Julien%2C%20je%20souhaite%20des%20informations%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20internet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium"
                    >
                    Discuter sur WhatsApp
                    </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center gap-2">
                    <Mail className="text-[#007AFF]" size={32} aria-hidden />
                    <a href="mailto:contact@julienlisita.com" className="hover:underline font-medium">
                    contact@julienlisita.com
                    </a>
                </div>
            </div>
        </HomeSection>
    )
}