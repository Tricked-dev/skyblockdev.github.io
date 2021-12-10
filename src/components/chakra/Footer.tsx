// import Link from 'next/link';

import ReactLink from "./ReactLink";
import WithChakra from "./withChakra";

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

const Footer = ({ lang }: any) => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {items.map((x, y) => (
          <div className="flex flex-col space-y-4" key={y}>
            <ReactLink lang={lang} i18n={x.i} href={x.h}>
              {x.n}
            </ReactLink>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"></div>
    </footer>
  );
};
export default WithChakra(Footer);
