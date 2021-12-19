import Link from "next/link";

let items = [
  {
    n: "Matrix",
    h: "/matrix",
    i: false,
  },
  {
    n: "Discord",
    h: "/discord",
    i: false,
  },
  {
    n: "Github",
    h: "/github",
    i: false,
  },
  {
    n: "Donate",
    h: "/donating",
    i: true,
  },
];

export default function Footer({ lang = "en" }: any) {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-gray-500 duration-200 focus:text-white hover:text-white">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {items.map((x, y) => (
          <div className="flex flex-col space-y-4 hover:text-emerald-600  duration-150" key={y}>
            {x.i ? (
              <Link href={`/[lang]${x.h}`} as={`/${lang}${x.h}`}>
                {x.n}
              </Link>
            ) : (
              <Link href={x.h}>{x.n}</Link>
            )}
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"></div>
    </footer>
  );
}
