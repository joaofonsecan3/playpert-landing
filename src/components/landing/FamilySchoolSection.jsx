import { Home, School, GraduationCap, ArrowRight } from "lucide-react";

const partnerships = [
  {
    icon: Home,
    title: "Para Famílias",
    description:
      "Acompanhe o desenvolvimento do seu filho com relatórios de progresso e atividades para fazer juntos em casa.",
    color: "from-[#F472B6] to-[#EC4899]",
    bgColor: "bg-pink-50",
  },
  {
    icon: School,
    title: "Para Escolas",
    description:
      "Integre nossa metodologia ao currículo escolar e potencialize o aprendizado de tecnologia dos alunos.",
    color: "from-[#6A4CFF] to-[#4F7BFF]",
    bgColor: "bg-purple-50",
  },
  {
    icon: GraduationCap,
    title: "Para Educadores",
    description:
      "Capacitação e recursos para aplicar metodologias inovadoras de ensino de tecnologia.",
    color: "from-[#4F7BFF] to-[#06B6D4]",
    bgColor: "bg-blue-50",
  },
];

export default function FamilySchoolSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#F472B6]/10 rounded-full text-[#F472B6] font-semibold text-sm mb-4">
            Parcerias
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parceria com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A4CFF] to-[#F472B6]">
              Famílias e Escolas
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partnerships.map((item, index) => (
            <div
              key={index}
              className={`group relative ${item.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-3 overflow-hidden`}
            >

              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed mb-6 transition-colors duration-500">
                  {item.description}
                </p>

                <div className="flex items-center text-[#6A4CFF] group-hover:text-white font-semibold transition-colors duration-500">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>

              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />

            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-700">
            Juntos,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A4CFF] to-[#F472B6]">
              preparando as novas gerações.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}