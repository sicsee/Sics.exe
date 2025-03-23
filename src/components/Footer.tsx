import { InstagramLogo } from "@phosphor-icons/react";
import Github from "../../public/github.svg";

export default function Footer() {
  return (
    <footer className="w-full h-14 bg-ground text-for2 absolute bottom-0 border-t-2 border-stroke flex items-stretch justify-between px-3">
      <div className="flex items-center">
        <span>Find me in:</span>
        <div className="border-x-2 border-stroke h-full px-2 ml-4">
          <a
            href="https://www.instagram.com/_nicolasds_/"
            target="_blank"
            className="h-full flex items-center hover:text-laranja hover:scale-101 transition-all ease-linear"
          >
            <InstagramLogo size={25} />
          </a>
        </div>
      </div>

      <div className="items-center flex">
        <div className=" hover:text-laranja transition-all ease-linear">
          <a
            href="https://github.com/sicsee"
            className="flex items-center gap-1"
            target="_blank"
          >
            @sicsee
            <img src={Github} alt="GitHub Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
