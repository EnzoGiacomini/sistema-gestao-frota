"use client";
import { useState } from "react";

export default function LoginPage() {
  //para guardar oq o usuario digita
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  //funcao para quando o usuario clicar em entrar
  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    //para teste
    console.log("Tentando logar com:", email, senha);

    //API aq para o login...
  };

  return (
    <div className="min-h-screen grid grid-cols-1 min-[950px]:grid-cols-2 bg-white text-black">
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col items-center justify-center gap-10">
          <img src="/logoPrefPelWhite.jpeg" alt="icon" className="w-130 h-50" />
          <p className="font-bold text-black-400 text-[22px]">
            Entre com a sua conta
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[20px] text-zinc-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email aqui"
              className="bg-transparent border border-zinc-800 rounded-md p-3 text-black focus:outline-none focus:border-orange-500 transition-colors min-[430px]:w-98 h-16"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="text-[20px] text-zinc-700">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha aqui"
              className="bg-transparent border border-zinc-800 rounded-md p-3 text-black focus:outline-none focus:border-orange-500 transition-colors min-[430px]:w-98 h-16"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-all duration-200 active:scale-95 cursor-pointer "
          >
            ENTRAR
          </button>
        </form>

        <a href="#" className="text-sm text-orange-500 hover:underline">
          Não tem conta? Cadastre-se!
        </a>
      </div>
      <div className="hidden min-[950px]:flex flex-col justify-center items-center bg-zinc-900 bg-[url('/bg-login.webp')] bg-cover bg-center">
        <div className="flex bg-black/60 flex-col justify-center items-center rounded-3xl p-5 gap-6 text-center">
          <h4 className="text-7xl font-bold text-white">DVO</h4>
          <h5 className="text-3xl font-light text-gray-300">
            Departamento de Veículos e Oficinas
          </h5>
        </div>
      </div>
    </div>
  );
}
