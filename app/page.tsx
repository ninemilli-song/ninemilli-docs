import Image from "next/image";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center sm:items-center">
        <Image
          className="dark:invert"
          src="/images/library.jpg"
          alt="My logo"
          fill
          priority
        />

        <div className="justify-items-center z-10 tracking-[-.01em] text-2xl font-bold text-orange-600
 subpixel-antialiased">
          欢迎来到九毫墨痕的知识海洋
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row z-10">
          <a
            className="rounded-full border border-solid border-transparent transition-colors text-stone-50 flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            关于这里
            <Image
              className="dark:invert text-stone-50 fill-red-950"
              src="/svg/mode-portrait.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            开启旅程
            <Image
              className="dark:invert"
              src="/svg/arrow-right.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
