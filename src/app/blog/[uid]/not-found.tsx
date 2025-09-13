"use client";

const NotFound = () => {
  return (
    <section className="relative flex h-dvh w-full flex-wrap items-center justify-center gap-6 overflow-hidden p-6">
      <div className="relative z-[-1] flex size-max flex-col place-items-center items-center justify-center gap-1 before:absolute before:h-[600px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:bg-gradient-conic after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:via-[#0141ff] after:dark:opacity-30 sm:before:w-[480px] sm:after:w-[440px] before:lg:h-[1560px]">
        <h1 className="text-3xl text-white">Ooops!</h1>

        <div className="flex items-center gap-4">
          <h2 className="text-sm">Não encontrado</h2>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
