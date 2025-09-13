"use client";
import LandingFooter from "../components/core/footer";
import LandingHeader from "../components/core/header";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex h-full flex-col">
      <LandingHeader />

      <main className="flex h-dvh w-full flex-wrap items-center justify-center gap-6 overflow-hidden p-6">
        <div className="relative flex size-max flex-col items-center justify-center gap-1">
          <h1 className="text-3xl text-white">Ooops!</h1>

          <div className="flex flex-col items-center gap-4">
            <h2 className="text-sm">Ocorreu um erro desconhecido...</h2>
            <button onClick={reset}>
              {" "}
              Clique abaixo para tentar novamente{" "}
            </button>
            <p className="text-sm">
              {" "}
              Info sobre o erro:{" "}
              <strong>{error.message || "Desconhecido"}</strong>{" "}
            </p>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
};

export default GlobalError;
