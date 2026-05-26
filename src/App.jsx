import { useState } from "react";

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [secao, setSecao] = useState("home");

  const irPara = (pagina) => {
    setSecao(pagina);
    setMenuAberto(false);
  };

  return (
    <div className="min-h-screen bg-[#000814] text-white overflow-x-hidden">

      {/* 🔒 SCROLL MOBILE TRAVADO */}
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

        {/* LOGO → volta HOME */}
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

          <button onClick={() => irPara("sobre")} className="text-left hover:text-[#4EA8DE]">
            Sobre
          </button>

          <button onClick={() => irPara("experiencias")} className="text-left hover:text-[#4EA8DE]">
            Experiências
          </button>

          <button onClick={() => irPara("portfolio")} className="text-left hover:text-[#4EA8DE]">
            Portfólio
          </button>

          <button onClick={() => irPara("precos")} className="text-left hover:text-[#4EA8DE]">
            Preços
          </button>

          <button onClick={() => irPara("contato")} className="text-left hover:text-[#4EA8DE]">
            Contato
          </button>

        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex min-h-screen relative z-40">

        {/* SIDEBAR */}
        <div className="w-[130px] bg-[#001523]/80 backdrop-blur-xl border-r border-[#0A2239] flex flex-col items-center py-10">

          {/* HOME BUTTON */}
          <h1
            onClick={() => irPara("home")}
            className="text-5xl font-black text-[#4EA8DE] mb-20 cursor-pointer"
          >
            &lt;/&gt;
          </h1>

          <div className="flex flex-col gap-10 text-sm text-gray-300">

            <button onClick={() => irPara("sobre")} className="hover:text-[#4EA8DE]">
              Sobre
            </button>

            <button onClick={() => irPara("experiencias")} className="hover:text-[#4EA8DE]">
              Experiências
            </button>

            <button onClick={() => irPara("portfolio")} className="hover:text-[#4EA8DE]">
              Portfólio
            </button>

            <button onClick={() => irPara("precos")} className="hover:text-[#4EA8DE]">
              Preços
            </button>

            <button onClick={() => irPara("contato")} className="hover:text-[#4EA8DE]">
              Contato
            </button>

          </div>
        </div>

        {/* CONTEUDO */}
        <div className="flex-1 flex items-center justify-center px-20">

          <div className="max-w-[950px] w-full">

            {secao === "home" && (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-10">

    {/* TEXTO PRINCIPAL */}
    <div>

      <p className="text-gray-400 mb-4">Vinícius Santos</p>

      <h1 className="text-6xl md:text-7xl font-black leading-tight">
        FRONTEND<br />
        DEVELOPER
      </h1>

      <p className="text-gray-400 mt-6 text-lg max-w-[600px]">
        Desenvolvo interfaces modernas, rápidas e responsivas com React e TailwindCSS.
      </p>

      <button
        onClick={() => irPara("portfolio")}
        className="mt-10 px-6 py-3 bg-[#4EA8DE] text-black font-bold rounded-xl hover:scale-105 transition"
      >
        Ver Portfólio
      </button>
    </div>

{/* BLOCO VS CODE */}
<div className="w-full md:w-[420px] bg-[#0B1220] border border-[#1E2A3A] rounded-2xl overflow-hidden font-mono text-sm shadow-xl">

  {/* NEGOCIO DO MACOS SÓ Q NO PC */}
  <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1A] border-b border-[#1E2A3A]">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>

    <p className="ml-4 text-gray-400 text-xs">developer.js</p>
  </div>

  {/* CODE */}
  <div className="p-5 leading-6">

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
      <span className="text-green-400">"Vinícius"</span>,
    </p>

    <p className="pl-4">
      <span className="text-blue-300">stack</span>
      <span className="text-white">:</span>{" "}
      <span className="text-yellow-300">["React", "Tailwind"]</span>,
    </p>

    <p className="pl-4">
      <span className="text-blue-300">focus</span>
      <span className="text-white">:</span>{" "}
      <span className="text-green-400">"Frontend Development"</span>,
    </p>

    <p>
      <span className="text-white">{"}"}</span>
    </p>

  </div>
</div>

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

            {/* PORTFÓLIO */}
            {secao === "portfolio" && (
              <div>
                <h1 className="text-6xl font-black mb-6">Portfólio</h1>

                <div className="grid gap-4 text-gray-400 text-xl">
                  <div className="p-4 border border-[#0A2239] rounded-xl">Landing Page SaaS</div>
                  <div className="p-4 border border-[#0A2239] rounded-xl">Dashboard UI</div>
                  <div className="p-4 border border-[#0A2239] rounded-xl">Portfólio interativo</div>
                </div>
              </div>
            )}

            {/* PREÇOS */}
            {secao === "precos" && (
              <div>
                <h1 className="text-6xl font-black mb-6">Preços</h1>

                <p className="text-gray-400 text-xl leading-9">
                  💻 Landing Page: <span className="text-[#4EA8DE] font-bold">R$ 400 – R$ 900</span><br />
                  ⚡ Site Completo: <span className="text-[#4EA8DE] font-bold">R$ 900 – R$ 2.500</span><br />
                  🚀 UI Personalizada: sob orçamento
                </p>
              </div>
            )}

            {/* CONTATO */}
            {secao === "contato" && (
              <div>
                <h1 className="text-6xl font-black mb-6">Contato</h1>

                <p className="text-gray-400 text-xl leading-10">

                  📩 Email: <span className="text-[#4EA8DE]">afrodevini@gmail.com</span><br />

                  💼 LinkedIn: <span className="text-[#4EA8DE]">linkedin.com/in/afrodevini</span><br />

                  📱 WhatsApp: <span className="text-[#4EA8DE]">79 9 9121-5285</span><br />

                  📸 Instagram: <span className="text-[#4EA8DE]">@afrodevini</span>

                </p>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* MOBILE SIMPLES */}
 <div className="md:hidden px-8 pt-10 pb-20 relative z-30">

  {/* HOME */}
  {secao === "home" && (
    <>
      <h1 className="text-5xl font-black mb-6">
        FRONTEND<br />DEVELOPER
      </h1>

      <p className="text-gray-400 mb-10">
        Interfaces modernas, rápidas e responsivas.
      </p>

      <button
        onClick={() => irPara("portfolio")}
        className="w-full py-4 bg-[#4EA8DE] text-black font-bold rounded-2xl"
      >
        Ver Portfólio
      </button>
      <div className="bg-[#0B1220] border border-[#1E2A3A] rounded-2xl overflow-hidden font-mono text-sm mb-8">

  {/* NEGOCIO DO MACOS */}
  <div className="flex items-center gap-2 px-4 py-4 bg-[#0A0F1A] border-b border-[#1E2A3A]">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>

    <p className="ml-4 text-gray-400 text-xs">mobile.js</p>
  </div>

  {/* CODE */}
  <div className="p-4 leading-6">

    <p className="text-gray-500">// mobile dev</p>

    <p>
      <span className="text-purple-400">const</span>{" "}
      <span className="text-blue-400">dev</span>{" "}
      <span className="text-white">= {"{"}</span>
    </p>

    <p className="pl-3 text-blue-300">name: <span className="text-green-400">"Vinícius"</span>,</p>

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
                  <div className="p-4 border border-[#0A2239] rounded-xl">Landing Page SaaS</div>
                  <div className="p-4 border border-[#0A2239] rounded-xl">Dashboard UI</div>
                  <div className="p-4 border border-[#0A2239] rounded-xl">Portfólio interativo</div>
                </div>
    </div>
  )}

  {/* PREÇOS MOBILE */}
  {secao === "precos" && (
    <div>
      <h1 className="text-3xl font-black mb-4">Preços</h1>

                <p className="text-gray-400 text-xl leading-9">
                  💻 Landing Page: <span className="text-[#4EA8DE] font-bold">R$ 400 – R$ 900</span><br />
                  ⚡ Site Completo: <span className="text-[#4EA8DE] font-bold">R$ 900 – R$ 2.500</span><br />
                  🚀 UI Personalizada: sob orçamento
                </p>
    </div>
  )}

  {/* CONTATO MOBILE */}
  {secao === "contato" && (
    <div>
      <h1 className="text-6xl font-black mb-6">Contato</h1>

                <p className="text-gray-400 text-xl leading-10">

                  📩 Email: <span className="text-[#4EA8DE]">afrodevini@gmail.com</span><br />

                  💼 LinkedIn: <span className="text-[#4EA8DE]">linkedin.com/in/afrodevini</span><br />

                  📱 WhatsApp: <span className="text-[#4EA8DE]">79 9 9121-5285</span><br />

                  📸 Instagram: <span className="text-[#4EA8DE]">@afrodevini</span>
      </p>
    </div>
  
  )}

</div>
    </div>
  );
}