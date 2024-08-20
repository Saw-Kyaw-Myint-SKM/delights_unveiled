import React from "react";
import NavLink from "./NavLink";
import "aos/dist/aos.css";

const Navbar = () => {
    return (
        <nav
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            className="hidden sm:flex bg-gray-800 text-white pl-16 pr-16 pt-5 pb-5 flex justify-between items-center"
        >
            <div className="flex items-center">
                <div className="flex space-x-4 max-w-7xl ">
                    <NavLink
                        href={route("blog")}
                        className="text-white hover:text-red-400"
                        active={route().current("blog")}
                    >
                        {" "}
                        Blog
                    </NavLink>
                    {/* <NavLink href='about'className="text-white hover:text-gray-200"> About Us</NavLink> */}
                    <NavLink
                        href={route("contact")}
                        className="text-white hover:text-red-500"
                        active={route().current("contact")}
                    >
                        {" "}
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
