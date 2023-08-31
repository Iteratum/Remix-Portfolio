import { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import stylesheet from "~/tailwind.css";




export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function PortfolioNavRoute() {
    const [menu, setMenu] = useState(true)

    function MenuToggle() {
        setMenu(!menu)
    }
    
    return (
        <div className="min-w-full z-30 fixed ">
            <nav className="bg-purple-950 text-white md:bg-transparent border-b-2 border-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="rounded-md px-3 py-2 text-xl font-bold">O.E.E</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className="bg-gray- hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">HOME</a>
                                <a href="/Portfolio" className="hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">PORTFOLIO</a>
                                <a href="/About" className="hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">ABOUT</a>
                                <a href="/Contact" className="hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">CONTACT</a>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" onClick={MenuToggle} className="relative inline-flex items-center justify-center rounded-md bg-purple-800 p-2 text-gray-200 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {menu ? <OpenMenu /> : <CloseMenu />}
                            </button>
                        </div>
                    </div>
                </div>
                {menu ? null : <MobileMenu />}
            </nav>
        </div>
    )
}

function MobileMenu() {
    return (
        <div className="block z-50 text-center" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a href="/" className="bg-gray-900 text-amber-500 block rounded-md px-3 py-2 text-base font-medium">HOME</a>
              <a href="/Portfolio" className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2 text-base font-medium">PORTFOLIO</a>
              <a href="/About" className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2 text-base font-medium">ABOUT</a>
              <a href="/Contact" className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2 text-base font-medium">CONTACT</a>
            </div>
        </div>
    )
}

function CloseMenu() {
    return (
        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

function OpenMenu() {
    return (
        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}