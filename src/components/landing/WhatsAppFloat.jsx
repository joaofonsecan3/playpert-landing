import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappLink =
    "https://wa.me/5587991051094?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20da%20Playpert";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}