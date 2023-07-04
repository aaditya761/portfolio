"use client"
import {GrDocumentText} from "react-icons/gr";
import variables from "../styles/component.module.scss";
import {Montserrat} from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'] })
import Lottie from "lottie-react";
import Discover from "../public/images/lottie/discover1.json";
import Strategize from "../public/images/lottie/planning.json";
import Design from "../public/images/lottie/design.json";
import Develop from "../public/images/lottie/develop.json";

const Process = () => {
    return (<div className={variables.process_container}>
        <div className={`${variables.section_title} ${variables.fadeIn} ${montserrat.className}`}>
            A sneak-peek into our process
        </div>
        <div className={`${variables.process_subtitle} ${variables.fadeIn} ${montserrat.className}`}>
            See how we build products that are loved by millions
        </div>
        <div className={`${variables.fadeIn} ${variables.process_card_cont}`}>
            <div className={variables.process_card}>
                <div className={variables.process_card_icon_div}>
                    <Lottie style={{height:"15rem"}} animationData={Discover} />
                </div>
                <div className={`${variables.process_card_title} ${montserrat.className}`}>
                    Discover
                </div>
                <div className={`${variables.process_card_desc} ${montserrat.className}`}>
                    A detailed analysis of your requirements & needs combined with an in-depth discovery session allows
                    us to make a clear roadmap.
                </div>
            </div>
            <div className={variables.process_card}>
                <div className={variables.process_card_icon_div}>
                    <Lottie style={{height:"15rem"}} animationData={Strategize} />
                </div>
                <div className={`${variables.process_card_title} ${montserrat.className}`}>
                    Strategize
                </div>
                <div className={`${variables.process_card_desc} ${montserrat.className}`}>
                    Nothing works without a game plan. We understand why the market needs your product and who needs it
                    the most. Depending on this, we chalk out a crystal-clear strategy to reach your audience.
                </div>
            </div>
            <div className={variables.process_card}>
                <div className={variables.process_card_icon_div}>
                    <Lottie style={{height:"15rem"}} animationData={Design} />
                </div>
                <div className={`${variables.process_card_title} ${montserrat.className}`}>
                    Design
                </div>
                <div className={`${variables.process_card_desc} ${montserrat.className}`}>
                    This stage consists of creating prototypes, wireframes, user flows and information architecture to
                    final visual design. A lot of iterations are involved here to make sure we stay on the right path.
                </div>
            </div>
            <div className={variables.process_card}>
                <div className={variables.process_card_icon_div}>
                    <Lottie style={{height:"15rem"}} animationData={Develop} />
                </div>
                <div className={`${variables.process_card_title} ${montserrat.className}`}>
                    Develop
                </div>
                <div className={`${variables.process_card_desc} ${montserrat.className}`}>
                    Using industry-specific best practices, we make sure your product is built as envisioned. We work
                    with you to test, iterate and launch products within budget and timelines.
                </div>
            </div>
        </div>
    </div>)
}

export default Process;