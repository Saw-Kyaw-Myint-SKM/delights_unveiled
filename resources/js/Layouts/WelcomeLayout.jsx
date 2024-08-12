import { useState, useEffect, useContext } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CartContext } from "./context/CardContext";

export default function Authenticated({header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [animate, setAnimate] = useState(false);
    const {cartCount } = useContext(CartContext);

    useEffect(() => {
      if (cartCount > 0) {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 300);
        return () => clearTimeout(timer);
      }
    }, [cartCount]);
    return (
        <div className="min-h-screen bg-gray-100">
             <nav className="bg-white border-b border-gray-100 bg-white p-4 shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-center items-center">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <div className="space-x-8 sm:-my-px sm:flex">
                                <NavLink
                                    href={route("welcome")}
                                    active={route().current("welcome")}
                                >
                                    <span className="text-base md:text-lg text-red-500 font-bold">
                                        Delights
                                    </span>
                                    <span className="text-base md:text-lg text-gray-500 font-bold">
                                        Unveiled
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <TextInput
                                id="search"
                                type="text"
                                name="search..."
                                className="px-4 py-2 rounded-md"
                                autoComplete="Search"
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                            <PrimaryButton className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Search
                            </PrimaryButton>
                        </div>
                        <div className="flex sm:items-center sm:ms-6">
                            <div className="flex items-center space-x-4">
                                <Link href={route("add-to-card")} className="text-gray-700 mr-2">
                                    <div className="flex justify-center items-center">
                                        <div className="relative inline-block">
                                            <div className={`transform ${animate ? 'scale-125' : ''} transition-transform duration-300`}>
                                                <MdOutlineShoppingCart size={20} />
                                                {cartCount > 0 && (
                                                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full  px-1.5 py-0">
                                                    {cartCount}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden sm:flex ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                ughand
                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 pl-3 space-y-1">
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            <span className="text-base md:text-lg text-red-500 font-bold">
                                Delights
                            </span>
                            <span className="text-base md:text-lg text-gray-500 font-bold">
                                Unveiled
                            </span>
                        </NavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("blog")}>
                                Blog
                            </ResponsiveNavLink>
                            {/* <ResponsiveNavLink href={route("profile.edit")}>
                                About Us
                            </ResponsiveNavLink> */}
                            <ResponsiveNavLink href={route("contact")}>
                                Contact Us
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
