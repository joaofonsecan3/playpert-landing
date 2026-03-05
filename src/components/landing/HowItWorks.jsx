import { PlayCircle, Rocket, Target, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PlayCircle,
    title: "Aula Experimental",
    description: "Conheça nossa metodologia em uma aula gratuita.",
    color: "from-[#6A4CFF] to-[#4F7BFF]",
  },
  {
    icon: Rocket,
    title: "Entrada na Jornada",
    description: "Inicie a trilha de aprendizado personalizada.",
    color: "from-[#4F7BFF] to-[#06B6D4]",
  },
  {
    icon: Target,
    title: "Missões Práticas",
    description: "Desafios semanais que desenvolvem habilidades.",
    color: "from-[#06B6D4] to-[#F472B6]",
  },
  {
    icon: Trophy,
    title: "Projetos Criativos",
    description: "Criações digitais que consolidam o aprendizado.",
    color: "from-[#F472B6] to-[#6A4CFF]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#4F7BFF]/10 rounded-full text-[#4F7BFF] font-semibold text-sm mb-4">
            Processo
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A4CFF] to-[#4F7BFF]">
              Funciona
            </span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">

          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#6A4CFF] via-[#4F7BFF] to-[#F472B6] transform -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">

                <div className="flex flex-col items-center">

                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 relative z-10`}
                  >
                    <step.icon className="w-12 h-12 text-white" />

                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>

                </div>

                {index < steps.length - 1 && (
                  <div className="absolute top-12 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-[#6A4CFF] opacity-50" />
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 group">

              <div
                className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1 bg-white rounded-2xl p-5 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}