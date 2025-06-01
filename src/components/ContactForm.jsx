import Button from "./Button";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";

export default function ContactForm()
{
    return (
        <form 
           name="contact"
           method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/merci"
          className="w-full max-w-2xl bg-[#2a2a2a] rounded-2xl p-8 shadow-[0_0_12px_#5AC8FA] space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <FloatingInput label="Nom" name="name" type="text" required />
          <FloatingInput label="Email" name="email" type="email" required />
          <FloatingTextarea label="Message" name="message" required />
          <div className="text-center">
            <Button 
            type="submit"
            variant="primary"
            >
              Envoyer
            </Button>
          </div>
        </form>
    )
}