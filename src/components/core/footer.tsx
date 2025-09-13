const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 lg:px-12 w-full py-12 flex items-center justify-start bg-zinc-900 text-zinc-400 text-sm">
      <span>
        <strong>VSantos</strong> © {year} – Consultoria em Tecnologia e
        Desenvolvimento de Software Sob Medida
      </span>
    </footer>
  );
};

export default Footer;
