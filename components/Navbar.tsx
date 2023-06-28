"use client";
import variables from '../styles/component.module.scss';
import {Montserrat} from "next/font/google";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoClose} from "react-icons/io5";
import {useState} from "react";

const montserrat = Montserrat({subsets: ['latin']});

function Navbar() {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar=()=>{
        setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <div>
            <div className={variables.nav_container}>
                <div>
                    <div className={`${variables.nav_title} ${montserrat.className}`}>
                        Block Developers
                    </div>
                </div>
                <div className={`${variables.nav_right} ${montserrat.className}`}>
                    <div className={variables.nav_item}>
                        Services
                    </div>
                    <div className={variables.nav_item}>
                        Technologies
                    </div>
                    <div className={variables.nav_item}>
                        Clients
                    </div>
                    <div className={variables.nav_item}>
                        Testimonials
                    </div>
                    <div className={variables.nav_item}>
                        About Us
                    </div>
                    <div className={variables.nav_item}>
                        Contact Us
                    </div>
                </div>
            </div>
            <div className={variables.nav_container_mobile}>
                <div className={`${variables.nav_title_mobile} ${montserrat.className}`}>
                    Block Developers
                </div>
                <div>
                    <GiHamburgerMenu onClick={toggleNavbar} size={24}/>
                </div>
            </div>
            {isNavbarOpen?<div>
                <div className={`${variables.mobile_nav} ${montserrat.className}`}>
                    <div className={variables.close_icon_div}>
                        <IoClose onClick={toggleNavbar}  color={"black"} size={36} />
                    </div>
                    <div className={variables.nav_item_mobile}>
                        Services
                    </div>
                    <div className={variables.nav_item_mobile}>
                        Technologies
                    </div>
                    <div className={variables.nav_item_mobile}>
                        Clients
                    </div>
                    <div className={variables.nav_item_mobile}>
                        Testimonials
                    </div>
                    <div className={variables.nav_item_mobile}>
                        About Us
                    </div>
                    <div className={variables.nav_item_mobile}>
                        Contact Us
                    </div>
                </div>
            </div>:null}
        </div>
    )
}

export default Navbar;