"use client";

import Link from "next/link";
import Line from "../components/line";

const Page = () => {
  return (
    <main className="grid min-h-dvh h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 title">
          Página <Line>não encontrada</Line>
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Desculpe, a página que você está procurando não existe.{" "}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="text-sm font-semibold text-primary">
            Voltar
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
