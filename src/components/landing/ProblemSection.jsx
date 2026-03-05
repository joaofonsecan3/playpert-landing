import { Tv, Compass, Brain } from "lucide-react";

const problems = [
  {
    icon: Tv,
    title: "Consumo Passivo",
    description:
      "Crianças assistem vídeos e jogam sem direção, consumindo conteúdo sem desenvolver habilidades.",
    color: "from-red-400 to-orange-400",
    shadowColor: "shadow-red-500/20",
  },
  {
    icon: Compass,
    title: "Uso Sem Direção",
    description:
      "Tempo de tela sem propósito educacional ou desenvolvimento de competências.",
    color: "from-orange-400 to-yellow-400",
    shadowColor: "shadow-orange-500/20",
  },
  {
    icon: Brain,
    title: "Pouco Desenvolvimento Cognitivo",
    description:
      "Falta de estímulo para pensamento crítico, resolução de problemas e criatividade.",
    color: "from-yellow-400 to-amber-400",
    shadowColor: "shadow-yellow-500/20",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Crianças passam cada vez mais tempo com tecnologia.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A4CFF] to-[#F472B6]">
              Mas raramente aprendem a criar com ela.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-100 cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl ${problem.shadowColor} hover:shadow-2xl`}
            >

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                <problem.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6A4CFF] transition-colors duration-300">
                {problem.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>

              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-20`}
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}