import { createClient } from "@/prismicio";
import Image from "next/image";
import Link from "next/link";
import LandingFooter from "../../components/core/footer";
import LandingHeader from "../../components/core/header";

const Item = ({
  title,
  description,
  date,
  image,
  uid,
}: {
  title: string;
  description: string;
  date: string;
  image: string;
  uid: string;
}) => {
  return (
    <Link
      href={`/blog/${uid}`}
      className="flex w-full cursor-pointer flex-col items-start justify-start gap-2 font-sora transition hover:opacity-80"
    >
      <div className="w-full flex items-center justify-center ">
        <Image
          src={image}
          alt={title}
          width={250}
          height={300}
          className="rounded-lg object-cover border-4 border-primary"
          loading="lazy"
        />
      </div>
      <span className="mt-4 text-xs"> {date} </span>
      <h5 className="title text-lg!">{title}</h5>
      <p className="description text-sm! -mt-0!">{description}</p>
    </Link>
  );
};

const Page = async () => {
  const client = createClient();
  const pages = await client.getAllByType("post");

  return (
    <div className="flex h-full flex-col">
      <LandingHeader />
      <main className="w-full flex flex-col gap-3 lg:items-start justify-center h-full pl-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="title py-1.5 mx-0!"> Blog</h2>
        <p className="tracking-tight text-secondary max-w-2xl">desc</p>

        {pages?.length ? (
          <div className="min-h-[40dvh] mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-10 p-5 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-12">
            {pages.map((page) => {
              const slice = page.data.slices[0];

              return (
                <Item
                  key={page.uid}
                  uid={page.uid || ""}
                  title={slice!.primary.title?.toString() || ""}
                  description={slice!.primary.description?.toString() || ""}
                  date={slice!.primary.date?.toString() || ""}
                  image={slice!.primary.image?.url || ""}
                />
              );
            })}
          </div>
        ) : (
          <div className="min-h-[50dvh]">
            <span className="tracking-tight text-secondary">
              vazio
              <br />
              Fique de olho!
            </span>
          </div>
        )}
      </main>
      <LandingFooter />
    </div>
  );
};

export default Page;
