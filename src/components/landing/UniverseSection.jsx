import { Link } from "react-router-dom";
import { Compass, Star, Sparkles, Orbit } from "lucide-react";
import StarField from "./StarField";

export default function UniverseSection() {
  return (
    <section
      id="universo"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #4a2c7a 100%)",
      }}
    >
      <StarField count={100} />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6A4CFF] rounded-full blur-[200px] opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F472B6] rounded-full blur-[180px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-semibold text-sm mb-6 border border-white/20">
            <Orbit className="w-4 h-4" />
            Jornada de Aprendizado
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Explore o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] to-[#4F7BFF]">
              Universo Playpert
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Cada criança percorre uma jornada de aprendizado através de missões
            criativas e projetos digitais.
          </p>
        </div>

        {/* Galaxy Illustration */}
        <div className="relative max-w-4xl mx-auto mb-16">

          <div className="aspect-video rounded-3xl bg-gradient-to-br from-[#6A4CFF]/30 to-[#F472B6]/30 backdrop-blur-sm border border-white/20 overflow-hidden relative">

            {/* Central Planet */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6A4CFF] to-[#F472B6] shadow-2xl animate-pulse flex items-center justify-center">
                <Sparkles className="w-14 h-14 text-white" />
              </div>
            </div>

            {/* Orbit Elements */}
            <div
              className="absolute top-1/4 left-1/4 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#4F7BFF] flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white" fill="white" />
              </div>
            </div>

            <div
              className="absolute top-1/3 right-1/4 animate-bounce"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#F472B6] flex items-center justify-center shadow-lg">
                <Compass className="w-7 h-7 text-white" />
              </div>
            </div>

            <div
              className="absolute bottom-1/4 left-1/3 animate-bounce"
              style={{ animationDuration: "3.5s", animationDelay: "1s" }}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-[#6A4CFF]" />
              </div>
            </div>

            <div
              className="absolute bottom-1/3 right-1/3 animate-bounce"
              style={{ animationDuration: "2s", animationDelay: "1.5s" }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#4F7BFF] flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Orbit Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
            </svg>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">

          <Link
            to="/universo-playpert"
            className="bg-gradient-to-r from-[#F472B6] to-[#6A4CFF] hover:from-[#F472B6] hover:to-[#4F7BFF] text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg shadow-purple-500/30 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
          >
            <Compass className="w-5 h-5 mr-2" />
            Explorar a Jornada
          </Link>

        </div>

      </div>
    </section>
  );
}