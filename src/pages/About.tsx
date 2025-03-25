import Footer from "../components/Footer";
import Header from "../components/Header";
import "remixicon/fonts/remixicon.css";
import { Accordion } from "../components/Accordion";

export default function About() {
  return (
    <main className="h-screen bg-ground w-full">
      <Header />

      <section className="flex">
        <div className="flex flex-col w-14 border-stroke border-r h-128 items-center pt-3 space-y-5">
          <i className="ri-terminal-box-fill text-slate-500 hover:text-slate-300 hover:cursor-pointer text-xl transition-all ease-linear"></i>
          <i className="ri-user-4-fill text-slate-500 hover:text-slate-300 hover:cursor-pointer text-xl transition-all ease-linear"></i>
          <i className="ri-gamepad-fill text-slate-500 hover:text-slate-300 hover:cursor-pointer text-xl transition-all ease-linear"></i>
        </div>

        <div className="border-stroke border-b w-full h-10">
          <div className="border-stroke border-r ml-[7px] flex justify-center w-41  p-2">
            <span className="text-white flex items-center">
              <i className="ri-arrow-down-s-fill"></i> personal-info
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
