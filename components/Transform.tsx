import variables from '../styles/component.module.scss';
import {Montserrat} from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'] })

const Transform = ()=>{
    return(<div className={variables.transform_container}>
        <div className={`${variables.fadeIn} ${variables.transform_inner}`}>
            <div className={`${variables.transform_title} ${montserrat.className}`}>
                Transform Your Business
            </div>
            <div className={`${variables.transform_desc} ${montserrat.className}`}>
                Get ready to unlock the power of technology to accelerate your growth
            </div>
            <div className={variables.transform_button}>
                <div className={`${variables.transform_btn_text} ${montserrat.className}`}>
                    Contact Us
                </div>
            </div>
        </div>
    </div>)
}

export default Transform;