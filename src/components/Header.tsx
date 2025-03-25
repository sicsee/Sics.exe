import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex items-stretch h-14 text-for2 border-y border-stroke justify-between">
      <div className="flex items-center w-full gap-24">
        <h1 className="ml-7 flex items-center text-sm md:text-md">
          nicolas-david
        </h1>

        <nav className="flex h-full">
          <div className=" border-x border-stroke">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center justify-center px-6 h-full ${
                  isActive
                    ? "border-b-3 border-laranja text-for transition-all"
                    : "text-fo2"
                }`
              }
            >
              _hello
            </NavLink>
          </div>

          <div className=" border-x border-stroke">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center justify-center px-6 h-full ${
                  isActive
                    ? "border-b-3 border-laranja text-for transition-all"
                    : "text-fo2"
                }`
              }
            >
              _about-me
            </NavLink>
          </div>

          <div className=" border-x border-stroke">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center justify-center px-6 h-full ${
                  isActive
                    ? "border-b-3 border-laranja text-for transition-all"
                    : "text-fo2"
                }`
              }
            >
              _projects
            </NavLink>
          </div>
        </nav>
      </div>

      <div className=" border-x border-stroke flex w-42">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center justify-center px-6 h-full ${
              isActive
                ? "border-b-3 border-laranja text-for transition-all"
                : "text-fo2"
            }`
          }
        >
          _contact-me
        </NavLink>
      </div>
    </header>
  );
}
