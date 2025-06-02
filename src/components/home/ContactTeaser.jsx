// src/components/home/ContactTeaser.jsx

import ContactForm from "../common/ContactForm";
import HomeSection from "./HomeSection";

export default function ContactTeaser()
{
    return (
        <HomeSection
            id="contact"
            title="Contact"
            link={{href:"/contact", text:"En savoir plus"}}
        > 
        <p className="max-w-2xl">
           Une idée, un projet ou une question ? N’hésitez pas à me contacter via le formulaire ci-dessous. Je reviendrai vers vous dans les plus brefs délais.
        </p>
        <ContactForm/>
        </HomeSection>
    )
}