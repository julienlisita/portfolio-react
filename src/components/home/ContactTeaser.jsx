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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-base">
                <div className="flex items-center gap-2">
                    <Phone className="text-[#007AFF]" />
                    <span>06 23 00 04 49</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaWhatsapp className="text-green-500" size={24} />
                    <a
                    href="https://wa.me/33623000449?text=Bonjour%20Julien%2C%20je%20souhaite%20des%20informations%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20internet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    >
                    Discuter sur WhatsApp
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="text-[#007AFF]" />
                    <span>julien.lisita@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="text-[#007AFF]" />
                    <span>Mérignac – Bordeaux</span>
                </div>
                <div className="flex items-center gap-2">
                    <Car className="text-[#007AFF]" />
                    <span>Mobile en Gironde</span>
                </div>
            </div>
        </HomeSection>
    )
}