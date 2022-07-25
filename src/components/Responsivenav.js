import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Responsivenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="xl:container lg:container absolute top-28 md:top-14 md:left-[50%] xxs:left-0 sm:top-8 sm:right-2
     xs:top-8 xs:right-2 xxs:top-8 xxs:right-2"
    >
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-end h-16 ">
            <div className="flex items-center">
              {/* <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div> */}
              <div className="sm:hidden xs:hidden xxs:hidden md:hidden lg:block xl:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 text-quizbg md:text-white lg:text-white
                     xl:text-white px-3 py-2 
                    rounded-md text-sm font-medium"
                  >
                    Leaderboard
                  </Link>

                  <Link
                    to="/quiz"
                    className="text-gray-300 hover:bg-gray-700 text-quizbg md:text-white lg:text-white
                     xl:text-white 
                    px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Quiz
                  </Link>

                  <Link
                    to="/tutorial"
                    className="text-gray-300 hover:bg-gray-700 text-quizbg md:text-white lg:text-white
                     xl:text-white 
                    px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Tutorials
                  </Link>

                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 text-quizbg md:text-white lg:text-white
                     xl:text-white
                     px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About us
                  </Link>

                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 text-quizbg md:text-white lg:text-white
                     xl:text-white
                     px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-1 rounded text-gray-400
                 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-offset-transparent focus:ring-transparent"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="xl:hidden lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white md:w-screen sm:w-96
                xs:w-full xxs:w-36 xxs:float-right"
              >
                <Link
                  to="#"
                  className="hover:bg-gray-700 text-quizbg lg:text-white xl:text-white block 
                  px-3 py-2 rounded-md text-base font-medium"
                >
                  Leaderboard
                </Link>

                <Link
                  to="/quiz"
                  className="text-gray-300 hover:bg-gray-700 text-quizbg lg:text-white
                   xl:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Quiz
                </Link>

                <Link
                  to="/tutorial"
                  className="text-gray-300 hover:bg-gray-700 text-quizbg lg:text-white
                   xl:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Tutorials
                </Link>

                <Link
                  to="#"
                  className="text-gray-300 hover:bg-gray-700 text-quizbg lg:text-white
                   xl:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About us
                </Link>

                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 text-quizbg lg:text-white
                   xl:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Responsivenav;
