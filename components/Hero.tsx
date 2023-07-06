"use client"
import variables from "../styles/component.module.scss";
import Lottie from "lottie-react";
import Hero1 from "../public/images/hero.json";

import {Montserrat} from "next/font/google";
const montserrat = Montserrat({subsets: ['latin']})

function Hero() {
    const contactUs = ()=>{
        const section = document.querySelector( '#contact-us' )!;
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
    return (<div className={variables.hero_container}>
        <div className={variables.hero_left}>
            <div className={`${variables.hero_title} ${montserrat.className}`}>
                <div>
                    Your Vision, <span className={variables.gradient_text}>Our Expertise</span>
                </div>
                <div><span className={variables.gradient_text}>Tailor Made</span> Software Solutions</div>
                <div> to Drive Business <span className={variables.gradient_text}>Success</span></div>
            </div>
            <div>
                <div onClick={contactUs} className={variables.hero_contact_btn}>
                    <div className={`${variables.hero_contact_btn_text} ${montserrat.className}`}>Contact Us</div>
                </div>
            </div>
            <div className={variables.left_blur_class}>
            </div>
            <div className={variables.right_blur_class}>
            </div>
        </div>
        <div className={variables.hero_right}>
            <Lottie style={{width:"100%", height:"100%"}} animationData={Hero1} />
        </div>
    </div>)
}

export default Hero;