"use client"
import Image from "next/image";
import variables from '../styles/component.module.scss';
import {Montserrat} from "next/font/google";
import Lottie from "lottie-react";
import WebDevelopment from "../public/images/lottie/webdevelopment.json";
import UXDesign from "../public/images/lottie/ux-design1.json";
import Mobile from "../public/images/lottie/mobile.json";
import AI from "../public/images/lottie/ai.json";

const montserrat = Montserrat({subsets: ['latin']})

const Services = () => {
    return (<div id={"services"} className={variables.services_container}>
        <div className={`${variables.section_title} ${montserrat.className}`}>
            Our Services
        </div>
        <div className={variables.services_inner_1}>
            <div className={variables.services_card_image_cont}>
                <div>
                    <Lottie className={variables.services_image_height} animationData={UXDesign} />
                </div>
            </div>
            <div className={variables.services_card_text_div}>
                <div className={`${variables.services_card_title} ${montserrat.className}`}>
                    UI/UX Design
                </div>
                <div className={`${variables.services_description} ${montserrat.className}`}>
                    Proofs-of-concept, MVPs, advanced web/mobile products, enterprise solutions - you name it and our product design team will come up with the best solution for your business. Simplifying complex user experience with a strong focus on usability is what we strive for.
                </div>
            </div>
        </div>
        <div className={variables.services_inner_2}>
            <div className={variables.services_card_text_div}>
                <div className={`${variables.services_card_title} ${montserrat.className}`}>
                    Web Development
                </div>
                <div className={`${variables.services_description} ${montserrat.className}`}>
                    From the get-go, our web developers will invest time to know your business, your niche market, and
                    your goals to deliver highly- focused web-based products. We don’t believe in making a relationship
                    mere transactional, we go above and beyond to build a partnership.
                </div>
            </div>
            <div className={variables.services_card_image_cont}>
                <div style={{transform: "skew(1deg, -27deg)"}}>
                    <Lottie className={variables.services_image_height} animationData={WebDevelopment} />
                </div>
            </div>
        </div>
        <div className={variables.services_inner_1}>
            <div className={variables.services_card_image_cont}>
                <div className={variables.mobile_services_img}>
                    <Lottie className={variables.services_image_height} animationData={Mobile} />
                </div>
            </div>
            <div className={variables.services_card_text_div}>
                <div className={`${variables.services_card_title} ${montserrat.className}`}>
                    Mobile Development
                </div>
                <div className={`${variables.services_description} ${montserrat.className}`}>
                    Get thorough, well-researched, and tech- oriented mobile app design & development solutions with an unmatched focus on transparency, project management and communication.
                </div>
            </div>
        </div>
        <div className={variables.services_inner_2}>
            <div className={variables.services_card_text_div}>
                <div className={`${variables.services_card_title} ${montserrat.className}`}>
                    AI Development
                </div>
                <div className={`${variables.services_description} ${montserrat.className}`}>
                    From the get-go, our web developers will invest time to know your business, your niche market,
                    and
                    your goals to deliver highly- focused web-based products. We don’t believe in making a
                    relationship
                    mere transactional, we go above and beyond to build a partnership.
                </div>
            </div>
            <div className={variables.services_card_image_cont}>
                <div >
                    <Lottie className={variables.services_image_height} animationData={AI} />
                </div>
            </div>
        </div>
    </div>)
}

export default Services;