// src/components/home/ContactTeaser.jsx

import HomeSection from "./HomeSection";

export default function ContactTeaser()
{
    return (
        <HomeSection
            id="contact"
            title="Parlons de votre projet "
            link={{href:"/contact", text:"Me contacter"}}
        > 
        <p className="text-base sm:text-lg lg:text-xl">
          Une question, un projet à discuter ou un devis à demander ?<br/>
        Rendez-vous sur la page Contact pour me joindre facilement via formulaire, mail ou téléphone.   
        </p>
        </HomeSection>
    )
}