import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="https://github.com/SkyBlockDev/skyblockdev.github.io">Github</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="https://discord.gg/mY8zTARu4g">Discord</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="https://matrix.to/#/#tricked-hangout:matrix.org">Matrix</Link>
        </div>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"></div>
    </footer>
  );
}
