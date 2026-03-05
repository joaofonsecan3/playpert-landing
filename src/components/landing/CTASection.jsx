import { Rocket, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #6A4CFF 0%, #4F7BFF 50%, #F472B6 100%)",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-[180px] opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Pronto para preparar seu filho para o{" "}
          <span className="relative">
            futuro?
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8C50 2 150 2 198 8"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

          <button className="bg-white text-[#6A4CFF] hover:bg-gray-100 font-semibold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
            <Rocket className="w-5 h-5 mr-2" />
            Preparar meu filho para o futuro
          </button>

        </div>

        <p className="text-white/80 text-lg flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5" />
          Agende uma aula experimental gratuita.
        </p>

      </div>
    </section>
  );
}