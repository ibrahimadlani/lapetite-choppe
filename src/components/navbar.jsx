import { useState, Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { LogoutIcon, XIcon, MenuIcon } from "@heroicons/react/outline";
import logo from "../static/images/logo_col.svg";
import logo_min from "../static/images/logo_min_col.svg";
import NavigationItem from "../components/navigationitem";
import NavigationItemMobile from "../components/navigationitemmobile";
const navigation = {
  pages: [
    { name: "Menu", href: "/menu" },
    { name: "Reserver", href: "/reservation" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto border-b border-slate-700">
              <div className=" border-b-[1.5px] border-slate-700 pb-[3px]">
                <div className="px-4 py-5 flex justify-between border-b border-slate-700">
                  <a href="/">
                    <img src={logo_min} alt="" />
                  </a>
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className=" py-6 px-4 space-y-6">
                <NavigationItemMobile href="/menu" label="menu" />
                <NavigationItemMobile href="/reservation" label="reserver" />
                <NavigationItemMobile href="/blog" label="blog" />
                <NavigationItemMobile href="/contact" label="contact" />
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Navigation */}
      <header className="relative z-10">
        <nav
          aria-label="Top"
          className="border-b-[1.5px] border-slate-900 pb-[3px] "
        >
          {/* Secondary navigation */}
          <div className="backdrop-blur-md backdrop-filter bg-opacity-100 border-b border-slate-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div>
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:items-center">
                    <a href="/">
                      <span className="sr-only">La Petite Échoppe</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="hidden h-full">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-white"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu  (lg-) */}
                  <div className="flex-1 flex items-center">
                    <button
                      type="button"
                      className="-ml-2 p-2 text-slate-900 lg:invisible"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="h-full w-full lg:flex justify-around space-x-8 mr-12 hidden">
                      <NavigationItem
                        label="reserver"
                        href="/reservation"
                      ></NavigationItem>
                      <NavigationItem
                        label="menu"
                        href="/menu"
                      ></NavigationItem>
                    </div>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="/" className="">
                    <span className="sr-only">Workflow</span>
                    <img src={logo} alt="" className="h-12 w-auto m-1" />
                  </a>

                  <div className="flex-1 flex items-center w-full">
                    <div className="h-full lg:flex justify-around space-x-8 ml-12 hidden w-full">
                      <NavigationItem
                        label="blog"
                        href="/blog"
                      ></NavigationItem>
                      <NavigationItem
                        label="contacts"
                        href="/contact"
                      ></NavigationItem>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
