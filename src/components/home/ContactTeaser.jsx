// src/components/home/ContactTeaser.jsx

import { Mail, MapPin, Phone } from "lucide-react";
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-base">
                <div className="flex items-center gap-2">
                <Phone className="text-[#007AFF]" />
                <span>+33 6 23 00 04 49</span>
                </div>
                <div className="flex items-center gap-2">
                <Mail className="text-[#007AFF]" />
                <span>julien.lisita@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                <MapPin className="text-[#007AFF]" />
                <span>Mérignac – Bordeaux</span>
                </div>
            </div>
        </HomeSection>
    )
}