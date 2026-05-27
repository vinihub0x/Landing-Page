import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [secao, setSecao] = useState("home");

  const irPara = (pagina) => {
    setSecao(pagina);
    setMenuAberto(false);
  };

  return (
    <div className="min-h-screen bg-[#000814] text-white overflow-x-hidden">

      {/* 🔒 SCROLL IHPONE TRAVADO */}
      <style>{`
        @media (max-width: 768px) {
          html, body {
            overflow: hidden;
          }
        }
      `}</style>

      {/* FUNDO */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[180px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-cyan-500 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* NAV MOBILE */}
      <div className="md:hidden flex items-center justify-between px-6 py-6 relative z-50">

        {/* LOGO volta HOME */}
        <h1
          onClick={() => irPara("home")}
          className="text-3xl font-black text-[#4EA8DE] cursor-pointer"
        >
          &lt;/&gt;
        </h1>

        <button onClick={() => setMenuAberto(!menuAberto)} className="text-3xl">
          ☰
        </button>
      </div>

      {/* SIDEBAR MOBILE */}
      <div className={`
        fixed top-0 left-0 w-[260px] h-screen bg-[#001523]
        z-50 transition-transform duration-500 p-8 border-r border-[#0A2239]
        ${menuAberto ? "translate-x-0" : "-translate-x-full"}
      `}>

        <div className="flex items-center justify-between mb-16">

          <h1
            onClick={() => irPara("home")}
            className="text-4xl font-black text-[#4EA8DE] cursor-pointer"
          >
            &lt;/&gt;
          </h1>

          <button onClick={() => setMenuAberto(false)} className="text-3xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-8 text-xl">

          <button onClick={() => irPara("sobre")} className="text-left hover:text-[#4EA8DE] transition">
            Sobre
          </button>

          <button onClick={() => irPara("experiencias")} className="text-left hover:text-[#4EA8DE] transition">
            Experiências
          </button>

          <button onClick={() => irPara("portfolio")} className="text-left hover:text-[#4EA8DE] transition">
            Portfólio
          </button>

          <button onClick={() => irPara("precos")} className="text-left hover:text-[#4EA8DE] transition">
            Preços
          </button>

          <button onClick={() => irPara("contato")} className="text-left hover:text-[#4EA8DE] transition">
            Contato
          </button>

        </div>
      </div>

      {/* PC LAYOUT */}
      <div className="hidden md:flex min-h-screen relative z-40">

        {/* SIDEBAR */}
        <div className="w-[130px] bg-[#001523]/80 backdrop-blur-xl border-r border-[#0A2239] flex flex-col items-center py-10">

          {/* HOME BOTÃO */}
          <h1
            onClick={() => irPara("home")}
            className="text-5xl font-black text-[#4EA8DE] mb-20 cursor-pointer hover:scale-110 transition"
          >
            &lt;/&gt;
          </h1>

          <div className="flex flex-col gap-10 text-sm text-gray-300">

            <button onClick={() => irPara("sobre")} className="hover:text-[#4EA8DE] transition">
              Sobre
            </button>

            <button onClick={() => irPara("experiencias")} className="hover:text-[#4EA8DE] transition">
              Experiências
            </button>

            <button onClick={() => irPara("portfolio")} className="hover:text-[#4EA8DE] transition">
              Portfólio
            </button>

            <button onClick={() => irPara("precos")} className="hover:text-[#4EA8DE] transition">
              Preços
            </button>

            <button onClick={() => irPara("contato")} className="hover:text-[#4EA8DE] transition">
              Contato
            </button>

          </div>
        </div>

        {/* CONTEUDO */}
        <div className="flex-1 flex items-center justify-center px-20 overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.div
              key={secao}
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 30,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 1.04,
                y: -30,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="w-full"
            >

              <div className="max-w-[1100px] w-full">

                {secao === "home" && (
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-16">

                    {/* TEXTO PRINCIPAL */}
                    <div>

                      <p className="text-[#4EA8DE] uppercase tracking-[8px] text-sm mb-6 font-semibold">
                        Desenvolvedor Front-End
                      </p>

                      <h1 className="text-7xl md:text-8xl font-black leading-[0.9]">

                        <span className="text-white">
                          VINÍCIUS
                        </span>

                        <br />

                        <span className="text-[#4EA8DE]">
                          SANTOS
                        </span>

                      </h1>

                      <p className="text-gray-400 mt-8 text-xl max-w-[650px] leading-9">
                        Desenvolvo interfaces modernas, rápidas e responsivas
                        utilizando React, TailwindCSS e JavaScript,
                        focando em experiência visual, performance e usabilidade.
                      </p>

                      <div className="flex gap-4 mt-10">

                        <button
                          onClick={() => irPara("portfolio")}
                          className="px-8 py-4 bg-[#4EA8DE] text-black font-bold rounded-2xl hover:scale-105 transition duration-300"
                        >
                          Ver Portfólio
                        </button>

                        <button
                          onClick={() => irPara("contato")}
                          className="px-8 py-4 border border-[#4EA8DE] text-[#4EA8DE] rounded-2xl hover:bg-[#4EA8DE] hover:text-black transition duration-300"
                        >
                          Contato
                        </button>

                      </div>
                    </div>

                    {/* VS CODE FAKE */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full md:w-[450px] bg-[#0B1220] border border-[#1E2A3A] rounded-2xl overflow-hidden font-mono text-sm shadow-2xl"
                    >

                      {/* HEADER */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1A] border-b border-[#1E2A3A]">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>

                        <p className="ml-4 text-gray-400 text-xs">developer.js</p>
                      </div>

                      {/* CODE */}
                      <div className="p-5 leading-7">

                        <p className="text-gray-500">// frontend dev profile</p>

                        <p>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-400">dev</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-white">{"{"}</span>
                        </p>

                        <p className="pl-4">
                          <span className="text-blue-300">name</span>
                          <span className="text-white">:</span>{" "}
                          <span className="text-green-400">"Vinícius Santos"</span>,
                        </p>

                        <p className="pl-4">
                          <span className="text-blue-300">stack</span>
                          <span className="text-white">:</span>{" "}
                          <span className="text-yellow-300">["React", "TailwindCSS", "JavaScript"]</span>,
                        </p>

                        <p className="pl-4">
                          <span className="text-blue-300">focus</span>
                          <span className="text-white">:</span>{" "}
                          <span className="text-green-400">"Frontend Development"</span>,
                        </p>

                        <p className="pl-4">
                          <span className="text-blue-300">instagram</span>
                          <span className="text-white">:</span>{" "}
                          <span className="text-green-400">"@afrodevini"</span>,
                        </p>

                        <p>
                          <span className="text-white">{"}"}</span>
                        </p>

                      </div>
                    </motion.div>

                  </div>
                )}

                {/* SOBRE */}
                {secao === "sobre" && (
                  <div>
                    <h1 className="text-6xl font-black mb-6">
                      Transformando ideias em produtos digitais
                    </h1>

                    <p className="text-gray-400 text-xl leading-9">
                      Sou desenvolvedor Front-End com foco em criar interfaces modernas,
                      escaláveis e de alta performance.
                      <br /><br />
                      Trabalho com React, TailwindCSS e JavaScript, sempre buscando unir
                      design limpo, usabilidade e performance.
                      <br /><br />
                      Meu objetivo é construir experiências digitais que realmente conectam
                      pessoas com produtos.
                    </p>
                  </div>
                )}

                {/* EXPERIÊNCIAS */}
                {secao === "experiencias" && (
                  <div className="flex flex-col md:flex-row items-start gap-16">

                    <div>
                      <h1 className="text-6xl font-black mb-6">
                        Experiências
                      </h1>

                      <p className="text-gray-400 text-xl leading-9">
                        • Desenvolvimento de interfaces modernas<br />
                        • Criação de landing pages responsivas e automações web<br />
                        • Projetos com React + TailwindCSS<br />
                        • Foco em UI/UX e performance web
                      </p>
                    </div>

                    {/* VS CODE */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full md:w-[450px] bg-[#0B1220] border border-[#1E2A3A] rounded-2xl overflow-hidden font-mono text-sm shadow-2xl"
                    >

                      <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1A] border-b border-[#1E2A3A]">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>

                        <p className="ml-4 text-gray-400 text-xs">experience.js</p>
                      </div>

                      <div className="p-5 leading-7">
                        <p className="text-gray-500">// work experience</p>

                        <p>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-400">experience</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-white">{"{"}</span>
                        </p>

                        <p className="pl-4 text-blue-300">
                          stack: <span className="text-yellow-300">["React", "TailwindCSS"]</span>,
                        </p>

                        <p className="pl-4 text-blue-300">
                          focus: <span className="text-green-400">"UI/UX"</span>,
                        </p>

                        <p className="pl-4 text-blue-300">
                          responsive: <span className="text-orange-400">true</span>,
                        </p>

                        <p>
                          <span className="text-white">{"}"}</span>
                        </p>
                      </div>

                    </motion.div>

                  </div>
                )}

                {/* PORTFÓLIO */}
                {secao === "portfolio" && (
                  <div>
                    <h1 className="text-6xl font-black mb-6">Portfólio</h1>

                    <div className="grid gap-4 text-gray-400 text-xl">
                      <div className="p-4 border border-[#0A2239] rounded-xl hover:border-[#4EA8DE] transition">
                        Landing Page SaaS
                      </div>

                      <div className="p-4 border border-[#0A2239] rounded-xl hover:border-[#4EA8DE] transition">
                        Dashboard UI
                      </div>

                      <div className="p-4 border border-[#0A2239] rounded-xl hover:border-[#4EA8DE] transition">
                        Portfólio interativo
                      </div>
                    </div>
                  </div>
                )}

                {/* PREÇOS */}
                {secao === "precos" && (
                  <div className="flex flex-col md:flex-row items-start gap-16">

                    <div>
                      <h1 className="text-6xl font-black mb-6">
                        Preços
                      </h1>

                      <p className="text-gray-400 text-xl leading-9">
                        💻 Landing Page: <span className="text-[#4EA8DE] font-bold">R$ 400 – R$ 900</span><br />
                        ⚡ Site Completo: <span className="text-[#4EA8DE] font-bold">R$ 900 – R$ 2.500</span><br />
                        🚀 UI Personalizada: sob orçamento
                      </p>
                    </div>

                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full md:w-[450px] bg-[#0B1220] border border-[#1E2A3A] rounded-2xl overflow-hidden font-mono text-sm shadow-2xl"
                    >

                      <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1A] border-b border-[#1E2A3A]">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>

                        <p className="ml-4 text-gray-400 text-xs">pricing.js</p>
                      </div>

                      <div className="p-5 leading-7">
                        <p className="text-gray-500">// project pricing</p>

                        <p>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-400">prices</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-white">{"{"}</span>
                        </p>

                        <p className="pl-4 text-blue-300">
                          landingPage: <span className="text-green-400">"R$ 400 - 900"</span>,
                        </p>

                        <p className="pl-4 text-blue-300">
                          fullWebsite: <span className="text-green-400">"R$ 900 - 2500"</span>,
                        </p>

                        <p className="pl-4 text-blue-300">
                          uiDesign: <span className="text-orange-400">"custom"</span>,
                        </p>

                        <p>
                          <span className="text-white">{"}"}</span>
                        </p>
                      </div>

                    </motion.div>

                  </div>
                )}
                {/* CONTATO */}
            {secao === "contato" && (
              <div className="flex flex-col md:flex-row items-start gap-16">

                <div className="text-gray-400 text-xl leading-10 flex flex-col gap-2">

                  <h1 className="text-6xl font-black mb-6 text-white">
                    Contato
                  </h1>

                  <a
                    href="mailto:afrodevini@email.com?subject=Contato%20Profissional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    📩 Email: <span className="text-[#4EA8DE]">afrodevini@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/afrodevini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    💼 LinkedIn: <span className="text-[#4EA8DE]">linkedin.com/in/afrodevini</span>
                  </a>

                  <a
                    href="https://wa.link/5kcela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    📱 WhatsApp: <span className="text-[#4EA8DE]">79 9 9121-5285</span>
                  </a>

                  <a
                    href="https://www.instagram.com/afrodevini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    📸 Instagram: <span className="text-[#4EA8DE]">@afrodevini</span>
                  </a>

                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full md:w-[450px] bg-[#0B1220] border border-[#1E2A3A] rounded-2xl overflow-hidden font-mono text-sm shadow-2xl"
                >

                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1A] border-b border-[#1E2A3A]">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>

                    <p className="ml-4 text-gray-400 text-xs">contact.js</p>
                  </div>

                  <div className="p-5 leading-7">
                    <p className="text-gray-500">// social links</p>

                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">contact</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-white">{"{"}</span>
                    </p>

                    <p className="pl-4 text-blue-300">
                      email: <span className="text-green-400">"afrodevini@gmail.com"</span>,
                    </p>

                    <p className="pl-4 text-blue-300">
                      instagram: <span className="text-green-400">"@afrodevini"</span>,
                    </p>

                    <p className="pl-4 text-blue-300">
                      linkedin: <span className="text-green-400">"afrodevini"</span>,
                    </p>

                    <p>
                      <span className="text-white">{"}"}</span>
                    </p>
                  </div>

                </motion.div>

              </div>
            )}

              </div>

            </motion.div>

          </AnimatePresence>

        </div>
      </div>

      {/* IPHONE SIMPLES */}
      <div className="md:hidden px-8 pt-10 pb-20 relative z-30 overflow-hidden">

        <AnimatePresence mode="wait">

          <motion.div
            key={secao}
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.04,
              y: -20,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >

            {/* HOME */}
            {secao === "home" && (
              <>
                <p className="text-[#4EA8DE] uppercase tracking-[5px] text-xs mb-4 font-semibold">
                  Desenvolvedor Front-End
                </p>

                <h1 className="text-6xl font-black leading-none mb-6">

                  <span className="text-white">VINÍCIUS</span>

                  <br />

                  <span className="text-[#4EA8DE]">SANTOS</span>

                </h1>

                <p className="text-gray-400 mb-10 text-lg leading-8">
                  Interfaces modernas, rápidas e responsivas utilizando React e TailwindCSS.
                </p>

                <button
                  onClick={() => irPara("portfolio")}
                  className="w-full py-4 bg-[#4EA8DE] text-black font-bold rounded-2xl mb-8"
                >
                  Ver Portfólio
                </button>

                <div className="bg-[#0B1220] border border-[#1E2A3A] rounded-2xl overflow-hidden font-mono text-sm mb-8">

                  <div className="flex items-center gap-2 px-4 py-4 bg-[#0A0F1A] border-b border-[#1E2A3A]">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>

                    <p className="ml-4 text-gray-400 text-xs">mobile.js</p>
                  </div>

                  <div className="p-4 leading-6">

                    <p className="text-gray-500">// mobile dev</p>

                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">dev</span>{" "}
                      <span className="text-white">= {"{"}</span>
                    </p>

                    <p className="pl-3 text-blue-300">
                      name: <span className="text-green-400">"Vinícius"</span>,
                    </p>

                    <p className="pl-3 text-blue-300">
                      stack: <span className="text-yellow-300">["React", "Tailwind"]</span>
                    </p>

                    <p className="text-white">{"}"}</p>

                  </div>
                </div>
              </>
            )}

            {/* SOBRE MOBILE */}
            {secao === "sobre" && (
              <div>
                <h1 className="text-5xl font-black mb-6">
                  Transformando ideias em produtos digitais
                </h1>

                <p className="text-gray-400 text-xl leading-9">
                  Sou desenvolvedor Front-End com foco em criar interfaces modernas,
                  escaláveis e de alta performance.
                  <br /><br />
                  Trabalho com React, TailwindCSS e JavaScript, sempre buscando unir
                  design limpo, usabilidade e performance.
                  <br /><br />
                  Meu objetivo é construir experiências digitais que realmente conectam
                  pessoas com produtos.
                </p>
              </div>
            )}

            {/* EXPERIÊNCIAS MOBILE */}
            {secao === "experiencias" && (
              <div>
                <h1 className="text-6xl font-black mb-6">Experiências</h1>

                <p className="text-gray-400 text-xl leading-9">
                  • Desenvolvimento de interfaces modernas<br />
                  • Criação de landing pages responsivas e automações web<br />
                  • Projetos com React + TailwindCSS<br />
                  • Foco em UI/UX e performance web
                </p>
              </div>
            )}

            {/* PORTFÓLIO MOBILE */}
            {secao === "portfolio" && (
              <div>
                <h1 className="text-6xl font-black mb-6">Portfólio</h1>

                <div className="grid gap-4 text-gray-400 text-xl">
                  <div className="p-4 border border-[#0A2239] rounded-xl">
                    Landing Page SaaS
                  </div>

                  <div className="p-4 border border-[#0A2239] rounded-xl">
                    Dashboard UI
                  </div>

                  <div className="p-4 border border-[#0A2239] rounded-xl">
                    Portfólio interativo
                  </div>
                </div>
              </div>
            )}

             {/* CONTATO MOBILE */}
            {secao === "contato" && (
              <div>
                <h1 className="text-5xl font-black mb-6">
                  Contato
                </h1>

                <div className="flex flex-col gap-4 text-gray-400 text-lg">

                  <a
                    href="mailto:afrodevini@gmail.com?subject=Contato%20Profissional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    📩 Email: <span className="text-[#4EA8DE]">afrodevini@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/afrodevini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    💼 LinkedIn: <span className="text-[#4EA8DE]">linkedin.com/in/afrodevini</span>
                  </a>

                  <a
                    href="https://wa.link/5kcela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    📱 WhatsApp: <span className="text-[#4EA8DE]">79 99121-5285</span>
                  </a>

                  <a
                    href="https://www.instagram.com/afrodevini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300 w-fit"
                  >
                    📸 Instagram: <span className="text-[#4EA8DE]">@afrodevini</span>
                  </a>

                </div>
              </div>
                      )}

          </motion.div>

        </AnimatePresence>

      </div>

    </div>
  );
}