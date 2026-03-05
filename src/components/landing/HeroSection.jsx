import { Rocket, Sparkles, Star, Zap } from "lucide-react";
import StarField from "./StarField";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 30%, #4a2c7a 60%, #6A4CFF 100%)",
      }}
    >
      <StarField count={150} />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F472B6] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F7BFF] rounded-full blur-[150px] opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#F472B6]" />
              <span className="text-white/90 text-sm font-medium">
                Educação do futuro
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tecnologia não deveria apenas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] to-[#4F7BFF]">
                entreter
              </span>{" "}
              crianças.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7BFF] to-[#F472B6]">
                Deveria prepará-las para o futuro.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              A Playpert desenvolve pensamento lógico, criatividade e autonomia
              através da criação de projetos digitais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-gradient-to-r from-[#F472B6] to-[#6A4CFF] hover:from-[#F472B6] hover:to-[#4F7BFF] text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg shadow-purple-500/30 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Preparar meu filho para o futuro
              </button>

              <button
                onClick={() => scrollToSection("cta")}
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50"
              >
                Agendar aula experimental
              </button>

            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">

              <div className="absolute inset-0 bg-gradient-to-br from-[#4F7BFF]/30 to-[#F472B6]/30 rounded-full backdrop-blur-sm border border-white/20 animate-pulse" />

              <div className="absolute inset-8 bg-gradient-to-br from-[#6A4CFF] to-[#4F7BFF] rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div
                    className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <Rocket className="w-12 h-12 text-white" />
                  </div>

                  <div className="w-32 h-8 bg-white/20 rounded-lg mx-auto" />
                </div>
              </div>

              <div
                className="absolute -top-4 -left-4 w-16 h-16 bg-[#F472B6] rounded-2xl flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s", animationDuration: "2s" }}
              >
                <Star className="w-8 h-8 text-white" fill="white" />
              </div>

              <div
                className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#4F7BFF] rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "2.5s" }}
              >
                <Zap className="w-7 h-7 text-white" />
              </div>

              <div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "3s" }}
              >
                <Sparkles className="w-6 h-6 text-[#6A4CFF]" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}