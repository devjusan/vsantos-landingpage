"use client";

import Button from "@/app/components/button";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <section className="flex h-dvh w-full flex-wrap items-center justify-center gap-6 overflow-hidden p-6">
      <div className="relative flex size-max flex-col items-center justify-center gap-1">
        <h1 className="text-3xl text-white">Ooops!</h1>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-sm">Ocorreu um erro!</h2>
          <Button onClick={reset}> Tentar novamente </Button>
          <p className="text-sm">
            {" "}
            Info: <strong>{error.message || "Unknown"}</strong>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
