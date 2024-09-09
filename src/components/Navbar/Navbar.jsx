import { useState } from "react";
import { handleScroll } from "../../utils/handleScroll";
import Themetoggle from "../Themetoggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 fixed top-0 left-0 z-10 shadow-md bg-[var(--background-color)] text-[var(--text-color)]">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="AmanWebDev"
            title="AmanWebDev"
            className="inline-flex items-center"
          >
            <i className="mr-2 text-2xl fa-solid fa-layer-group" />
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              AmanWebDev
            </span>
          </a>

          <ul className="items-center hidden space-x-8 lg:flex ml-5">
            <li>
              <a
                href="#about-me"
                onClick={handleScroll}
                className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={handleScroll}
                className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleScroll}
                className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-me"
                onClick={handleScroll}
                className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
              >
                Contact Me
              </a>
            </li>
          </ul>

          <div className="ml-auto">
            <Themetoggle />
          </div>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded"
              onClick={handleMenuClick}
            >
              <svg className="w-5 text-[var(--text-color)]" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-[var(--background-color)] text-[var(--text-color)] border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a href="/" className="inline-flex items-center">
                        <i className="mr-2 text-2xl fa-solid fa-layer-group" />
                        <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                          AmanWebDev
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-[var(--background-color)] focus:outline-none focus:shadow-outline"
                        onClick={handleMenuClick}
                      >
                        <svg
                          className="w-5 text-[var(--text-color)]"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                      <div className="ml-auto">
                        <Themetoggle />
                      </div>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#about-me"
                          onClick={handleMenuClick}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
                        >
                          About Me
                        </a>
                      </li>
                      <li>
                        <a
                          href="#skills"
                          onClick={handleMenuClick}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
                        >
                          Skills
                        </a>
                      </li>
                      <li>
                        <a
                          href="#projects"
                          onClick={handleMenuClick}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={handleMenuClick}
                          href="#contact-me"
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-[var(--text-color)]"
                        >
                          Contact Me
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
