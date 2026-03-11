import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Titulo.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/5587991051094?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20da%20Playpert";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Início", id: "hero" },
    { label: "Como Funciona", id: "how-it-works" },
    { label: "Metodologia", id: "solution" },
    { label: "Blog", id: "footer" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#6A4CFF] shadow-lg shadow-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={logo}
              alt="Playpert"
              className="h-6 md:h-7 w-auto max-w-[120px] brightness-0 invert"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F472B6] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#6A4CFF] hover:bg-[#F472B6] hover:text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-pink-500/30 hover:scale-105"
            >
              Agendar aula experimental
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#6A4CFF] overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/90 hover:text-white font-medium text-left py-2 transition-colors"
            >
              {item.label}
            </button>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#6A4CFF] hover:bg-[#F472B6] hover:text-white font-semibold rounded-full mt-2 px-6 py-2 text-center"
          >
            Agendar aula experimental
          </a>
        </nav>
      </div>
    </header>
  );
}