"use client"
import Image from "next/image";
import variables from '../styles/component.module.scss';
import {Montserrat} from "next/font/google";
import Lottie from "lottie-react";
import WebDevelopment from "../public/images/lottie/webdevelopment.json";
import UXDesign from "../public/images/lottie/ux-design1.json";
import Mobile from "../public/images/lottie/mobile.json";

const montserrat = Montserrat({subsets: ['latin']})

const Services = () => {
    return (<div className={variables.services_container}>
        <div className={variables.services_inner}>
            <div style={{width:"50%"}}>
                <div>
                    <Lottie style={{height:"25rem"}} animationData={UXDesign} />
                </div>
            </div>
            <div style={{width:"50%"}}>
                <div className={`${variables.section_title} ${montserrat.className}`}>
                    UI/UX Design
                </div>
                <div className={`${variables.wu_description} ${montserrat.className}`}>
                    Proofs-of-concept, MVPs, advanced web/mobile products, enterprise solutions - you name it and our product design team will come up with the best solution for your business. Simplifying complex user experience with a strong focus on usability is what we strive for.
                </div>
            </div>
        </div>
        <div className={variables.services_inner}>
            <div style={{width:"50%"}}>
                <div className={`${variables.section_title} ${montserrat.className}`}>
                    Web Development
                </div>
                <div className={`${variables.wu_description} ${montserrat.className}`}>
                    From the get-go, our web developers will invest time to know your business, your niche market, and
                    your goals to deliver highly- focused web-based products. We don’t believe in making a relationship
                    mere transactional, we go above and beyond to build a partnership.
                </div>
            </div>
            <div style={{width:"50%"}}>
                <div>
                    <Lottie style={{height:"25rem"}} animationData={WebDevelopment} />
                </div>
            </div>
        </div>
        <div className={variables.services_inner}>
            <div style={{width:"50%"}}>
                <div>
                    <Lottie style={{height:"25rem"}} animationData={Mobile} />
                </div>
            </div>
            <div style={{width:"50%"}}>
                <div className={`${variables.section_title} ${montserrat.className}`}>
                    Mobile Development
                </div>
                <div className={`${variables.wu_description} ${montserrat.className}`}>
                    Get thorough, well-researched, and tech- oriented mobile app design & development solutions with an unmatched focus on transparency, project management and communication.
                </div>
            </div>

        </div>
    </div>)
}

export default Services;