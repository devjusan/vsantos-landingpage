import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-4 md:px-24 px-8 flex gap-4 items-center justify-between border-b border-zinc-800">
      <Link href={"/"}>
        <span className="text-3xl text-white font-extrabold">VSantos</span>
      </Link>
      <span></span>
    </header>
  );
};

export default Header;
