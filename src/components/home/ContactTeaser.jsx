import ContactForm from "../ContactForm";
import HomeSection from "./HomeSection";

export default function ContactTeaser()
{
    return (
        <HomeSection
            id="contact"
            title="Envie de discuter d’un projet ?"
            link={{href:"/contact", text:"Plus d'infos"}}
        > 
        <p className="text-white max-w-2xl">
            Une idée, un projet ou simplement envie d’échanger ? Remplissez le formulaire ci-dessous et je vous répondrai rapidement.
        </p>
        <ContactForm/>
        </HomeSection>
    )
}