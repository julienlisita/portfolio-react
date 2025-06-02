// src/components/common/ContactForm.jsx

import Button from "./Button";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";
import { motion } from "framer-motion";

export default function ContactForm()
{
    return (
        <motion.form 
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/merci"
          className="w-full max-w-2xl bg-[#2a2a2a] rounded-2xl p-8 space-y-6"
          initial={{
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          }}
          whileInView={{
          boxShadow:
          "0px 0px 12px rgba(90, 200, 250, 0.4), 0px 0px 12px rgba(90, 200, 250, 0.4)",
           }}
          transition={{ delay: 1 }}
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
        </motion.form>
    )
}