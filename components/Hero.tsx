import variables from "../styles/component.module.scss";
import {Montserrat} from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'] })
function Hero() {
    return (<div className={variables.hero_container}>
        <div className={`${variables.hero_title} ${montserrat.className}`}>
            <div>
                Your Vision, <span className={variables.gradient_text}>Our Expertise</span>
            </div>
            <div><span className={variables.gradient_text}>Tailor Made</span> Software Solutions</div>
            <div> to Drive Business <span className={variables.gradient_text}>Success</span></div>
        </div>
        <div className={variables.bg_container}>
            <div className={variables.flex}>
                <div className={variables.hero_contact_btn}>
                    <div className={`${variables.hero_contact_btn_text} ${montserrat.className}`}>Contact Us</div>
                </div>
            </div>
        </div>
        <div className={variables.left_blur_class}>
        </div>
        <div className={variables.right_blur_class}>
        </div>
    </div>)
}

export default Hero;