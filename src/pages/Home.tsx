import { CaretRight } from "@phosphor-icons/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-ground">
      <Header />

      <main className="flex flex-col md:flex-row items-center justify-center py-12 px-6 lg:px-24 transition-all ease-initial">
        <section className="flex flex-col items-center lg:items-start lg:mb-0 lg:w-1/2 mt-20">
          <div className="flex flex-col mb-8">
            <p className="text-for2 text-lg">Hi all, I am</p>
            <h1 className="text-white text-3xl lg:text-5xl font-bold">
              Nicolas David
            </h1>
            <div className="flex items-center text-indigo-500 gap-2 mt-2">
              <CaretRight size={20} />
              <p className="text-xl font-normal">Front-end developer</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-for2 text-sm lg:text-base">
              // find my profile on Github:
            </p>
            <p className="text-white gap-3 flex text-sm lg:text-md">
              <span className="text-indigo-500">const</span>
              <span className="text-teal-400">githubLink</span>=
              <a
                href="https://github.com/sicsee"
                className="text-for3"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/sicsee
              </a>
            </p>
          </div>
        </section>

        <section className="flex justify-center lg:justify-end lg:w-1/2 md:ml-20">
          <div className="relative">
            <div className="relative bottom-60 sm:bottom-40 md:bottom-10">
              <div className="bg-teal-400 w-64 h-32 blur-3xl rounded-full relative top-10 right-20 opacity-60 rotate-12 z-0"></div>
              <div className="bg-indigo-500 w-64 h-32 blur-3xl rounded-full relative top-10 md:top-20  left-10 md:left-30 opacity-60 -rotate-45 z-0"></div>
            </div>
            <img
              src="/img1.png"
              alt="Imagem 1"
              className="rounded-2xl w-80 hidden md:block md:w-96 lg:w-110 z-10 relative bottom-35 right-20"
            />
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
}
