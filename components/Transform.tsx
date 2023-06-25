import variables from '../styles/component.module.scss';
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

const Transform = ()=>{
    return(<div className={variables.transform_container}>
        <div className={variables.transform_inner}>
            <div className={`${variables.transform_title} ${montserrat.className}`}>
                Transform you Business
            </div>
        </div>
    </div>)
}

export default Transform;