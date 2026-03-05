import { Brain, Lightbulb, MessageCircle, Users, Shield } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Pensamento Crítico",
    description:
      "Análise e avaliação de informações para tomar decisões fundamentadas.",
    color: "from-[#6A4CFF] to-[#4F7BFF]",
  },
  {
    icon: Lightbulb,
    title: "Criatividade",
    description:
      "Capacidade de gerar ideias originais e encontrar soluções inovadoras.",
    color: "from-[#F472B6] to-[#EC4899]",
  },
  {
    icon: MessageCircle,
    title: "Comunicação",
    description:
      "Expressão clara de ideias e escuta ativa para colaboração efetiva.",
    color: "from-[#4F7BFF] to-[#06B6D4]",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Trabalho em equipe respeitando diferenças e compartilhando conhecimento.",
    color: "from-[#06B6D4] to-[#10B981]",
  },
  {
    icon: Shield,
    title: "Cidadania Digital",
    description:
      "Uso responsável e ético da tecnologia no mundo conectado.",
    color: "from-[#10B981] to-[#6A4CFF]",
  },
];

export default function FutureSkills() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#6A4CFF]/10 rounded-full text-[#6A4CFF] font-semibold text-sm mb-4">
            Competências
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Habilidades do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A4CFF] to-[#F472B6]">
              Futuro
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            As habilidades que crianças precisam para o futuro começam aqui.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-gray-100"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                <skill.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6A4CFF] transition-colors duration-300">
                {skill.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>

              <div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`}
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}