import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const list = [
    {
      question: "Quanto tempo leva para desenvolver um sistema?",
      Answer: (
        <>
          {" "}
          <p className="desc">
            Depende da complexidade, mas nosso foco é entregar valor desde os
            primeiros ciclos, com MVPs que podem ficar prontos em semanas.
          </p>
        </>
      ),
    },
    {
      question: "A VSantos só atende empresas grandes?",
      Answer: (
        <>
          {" "}
          <p className="desc">
            Não. Atendemos desde startups em fase inicial até empresas
            consolidadas que precisam de sistemas robustos.
          </p>
        </>
      ),
    },
    {
      question: "Como a VSantos garante a qualidade?",
      Answer: (
        <>
          {" "}
          <p className="desc">
            Com metodologia estruturada, testes contínuos e foco na clareza do
            processo de desenvolvimento.
          </p>
        </>
      ),
    },
    {
      question: "Posso contar com suporte depois da entrega?",
      Answer: (
        <>
          {" "}
          <p className="desc">
            Sim, oferecemos manutenção e evolução contínua das soluções.
          </p>
        </>
      ),
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {list.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="justify-start!">
            <span className="title-xs w-full max-w-full!">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 *:text-start!">
            {item.Answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default FAQ;
