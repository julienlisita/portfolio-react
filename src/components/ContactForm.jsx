import Button from "./Button";

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
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-[#FFFFFF]">Nom</label>
            <input
              type="text"
              className="bg-[#1f1f1f] text-white p-3 rounded-md outline-none border border-transparent focus:border-[#5AC8FA] transition"
              placeholder="Votre nom"
              name="name" 
              id="name" 
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-[#FFFFFF]">Email</label>
            <input
              type="email"
              className="bg-[#1f1f1f] text-white p-3 rounded-md outline-none border border-transparent focus:border-[#5AC8FA] transition"
              placeholder="Votre email"
              name="email" 
              id="email" 
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-[#FFFFFF]">Message</label>
            <textarea
              rows="5"
              className="bg-[#1f1f1f] text-white p-3 rounded-md outline-none border border-transparent focus:border-[#5AC8FA] transition resize-none"
              placeholder="Votre message"
              name="message" 
              id="message" 
              required
            ></textarea>
          </div>
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