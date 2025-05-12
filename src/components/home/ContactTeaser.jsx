import ContactForm from "../ContactForm";
import HomeSection from "./HomeSection";

export default function ContactTeaser()
{
    return (
        <HomeSection
            id="contact"
            title="Me contacter"
            link={{href:"/contact", text:"Plus d'infos"}}
        > 
        <p className="text-white w-4/5 sm:w-4/5 lg:w-2/3 text-base sm:text-lg lg:text-xl ">
            Une idée, un projet ou simplement envie d’échanger ? Remplissez le formulaire ci-dessous et je vous répondrai rapidement.
        </p>
        <ContactForm/>
        </HomeSection>
    )
}