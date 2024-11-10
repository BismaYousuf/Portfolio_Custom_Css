"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import styles from './navbar.module.css'; // Import the CSS module

const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <>
            <div className={styles.textWhite}>
                {/* Desktop Navigation */}
                <div className={styles.desktopNavContainer}>
                    <ul className={styles.navLinksList}>
                        {navLinks.map((link, index) => (
                            <li key={index} className={styles.navLinkItem}>
                                <Link href={link.path}>
                                    <p className={styles.navLinkText}>
                                        {link.title}
                                    </p>
                                    <div className={styles.navLinkUnderline}></div>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className={styles.contactLink}>
                                <h1 className={styles.contactLinkHover}>
                                    Contact Me
                                </h1>
                                <div className="relative">
                                    <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                                    <div className="mt-1 absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Navigation Toggle Button */}
                <div
                    onClick={toggleNav}
                    className={styles.mobileNavToggle}
                >
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Navigation Menu */}
                <motion.div
                    initial={false}
                    animate={nav ? "open" : "closed"}
                    variants={menuVariants}
                    className={styles.mobileNavMenu}
                >
                    <ul className={styles.mobileNavLinksList}>
                        {navLinks.map((link, index) => (
                            <li key={index} className={styles.mobileNavLinkItem}>
                                <Link href={link.path} onClick={closeNav}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </>
    );
};

export default Navbar;
