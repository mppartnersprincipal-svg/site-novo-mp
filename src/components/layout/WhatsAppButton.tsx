"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/lib/constants";

export function WhatsAppButton() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a M|P no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mp-whatsapp text-white shadow-lg transition-transform duration-300 hover:scale-110"
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={
        reduce
          ? { duration: 0 }
          : { delay: 2, duration: 0.5, type: "spring", bounce: 0.45 }
      }
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
