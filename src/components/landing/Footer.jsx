import { Heart } from "lucide-react";
import logoFull from "@/assets/Titulo+subtitulo.svg";
import turtle from "@/assets/Logo Tartaruga.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Marca */}
          <div className="md:col-span-1 flex flex-col items-center text-center">

            <div className="flex flex-col items-center">

              <img
                src={turtle}
                alt="Playpert símbolo"
                className="h-12 w-auto mb-3 mx-auto"
              />

              <img
                src={logoFull}
                alt="Playpert"
                className="h-10 w-auto mx-auto"
              />

            </div>

          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navegação</h4>

            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Início
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Como Funciona
                </a>
              </li>

              <li>
                <a href="#solution" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Metodologia
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Sobre
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Política de Privacidade
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-[#6A4CFF] transition-colors duration-200">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © {currentYear} Playpert. Todos os direitos reservados.
            </p>

            <p className="text-gray-500 text-sm flex items-center gap-1">
              Feito com{" "}
              <Heart className="w-4 h-4 text-[#F472B6]" fill="#F472B6" />{" "}
              para o futuro by Fonseca
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}
