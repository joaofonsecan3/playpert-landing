import { Lightbulb, Palette, Heart } from "lucide-react";

const solutions = [
  {
    icon: Lightbulb,
    title: "Pensamento Estruturado",
    description:
      "Desenvolvemos a capacidade de organizar ideias, planejar projetos e resolver problemas de forma lógica.",
    color: "from-[#6A4CFF] to-[#4F7BFF]",
    bgColor: "bg-purple-50",
  },
  {
    icon: Palette,
    title: "Criatividade Aplicada",
    description:
      "Transformamos imaginação em projetos reais através de ferramentas digitais e metodologias criativas.",
    color: "from-[#F472B6] to-[#EC4899]",
    bgColor: "bg-pink-50",
  },
  {
    icon: Heart,
    title: "Desenvolvimento Socioemocional",
    description:
      "Cultivamos autonomia, resiliência e colaboração em um ambiente seguro e acolhedor.",
    color: "from-[#4F7BFF] to-[#06B6D4]",
    bgColor: "bg-blue-50",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#6A4CFF]/10 rounded-full text-[#6A4CFF] font-semibold text-sm mb-4">
            Nossa Solução
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            A Playpert transforma tecnologia em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A4CFF] to-[#F472B6]">
              desenvolvimento
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative ${solution.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-3 overflow-hidden`}
            >

              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}
                >
                  <solution.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  {solution.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                  {solution.description}
                </p>

              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}