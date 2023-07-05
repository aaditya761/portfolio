"use client";
import variables from '../styles/component.module.scss';
import {Montserrat} from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'] })

const Transform = ()=>{

    const contactUs = ()=>{
        const section = document.querySelector("#contact-us")!;
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return(<div className={variables.transform_container}>
        <div className={variables.transform_inner}>
            <div className={`${variables.transform_title} ${montserrat.className}`}>
                Transform Your Business
            </div>
            <div className={`${variables.transform_desc} ${montserrat.className}`}>
                Get ready to unlock the power of technology to accelerate your growth
            </div>
            <div onClick={()=>{contactUs()}} className={variables.transform_button}>
                <div className={`${variables.transform_btn_text} ${montserrat.className}`}>
                    Contact Us
                </div>
            </div>
        </div>
    </div>)
}

export default Transform;