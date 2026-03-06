import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Star,
  Rocket,
  Target,
  Trophy,
  Sparkles,
  Compass,
  Zap
} from "lucide-react"

import StarField from "@/components/landing/StarField"

const journeyStages = [
  {
    icon: Star,
    title: "Descoberta",
    description:
      "Primeiros passos no universo digital. Exploração de ferramentas e conceitos básicos.",
    color: "from-[#6A4CFF] to-[#4F7BFF]"
  },
  {
    icon: Rocket,
    title: "Decolagem",
    description:
      "Criação dos primeiros projetos. Desenvolvimento de pensamento lógico.",
    color: "from-[#4F7BFF] to-[#06B6D4]"
  },
  {
    icon: Target,
    title: "Missões",
    description:
      "Desafios práticos semanais que consolidam o aprendizado.",
    color: "from-[#06B6D4] to-[#10B981]"
  },
  {
    icon: Zap,
    title: "Criação",
    description:
      "Projetos criativos com autonomia e expressão pessoal.",
    color: "from-[#10B981] to-[#F472B6]"
  },
  {
    icon: Trophy,
    title: "Maestria",
    description:
      "Domínio de habilidades e criação de projetos avançados.",
    color: "from-[#F472B6] to-[#6A4CFF]"
  }
]

export default function UniversoPlaypert() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(135deg, #0a0416 0%, #1a0a2e 30%, #2d1b4e 60%, #4a2c7a 100%)"
      }}
    >
      <StarField count={200} />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6A4CFF] rounded-full blur-[200px] opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F472B6] rounded-full blur-[180px] opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

        {/* Header */}
        <div className="mb-16">

          <Link to="/#cta">
            <button className="text-white/70 hover:text-white hover:bg-white/10 mb-8 px-4 py-2 rounded-lg transition flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar
            </button>
          </Link>

          <div className="text-center">

            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-semibold text-sm mb-6 border border-white/20">
              <Compass className="w-4 h-4" />
              Jornada de Aprendizado
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Universo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] to-[#4F7BFF]">
                Playpert
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Uma jornada épica de aprendizado onde cada criança se torna protagonista do seu desenvolvimento.
            </p>

          </div>
        </div>

        {/* Journey */}
        <div className="relative max-w-4xl mx-auto">

          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6A4CFF] via-[#F472B6] to-[#4F7BFF] transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">

            {journeyStages.map((stage, index) => (

              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >

                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group">

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#F472B6] transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed">
                      {stage.description}
                    </p>

                  </div>
                </div>

                <div className="relative">

                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-2xl z-10 relative`}>
                    <stage.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stage.color} blur-xl opacity-50`} />

                </div>

                <div className="flex-1 hidden md:block" />

              </div>

            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">

          <a href="/#cta">

            <button className="bg-gradient-to-r from-[#F472B6] to-[#6A4CFF] hover:from-[#F472B6] hover:to-[#4F7BFF] text-white font-semibold px-10 py-6 text-lg rounded-full shadow-lg shadow-purple-500/30 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">

              <Sparkles className="w-5 h-5" />

              Iniciar a Jornada

            </button>

          </a>

        </div>

      </div>
    </div>
  )
}