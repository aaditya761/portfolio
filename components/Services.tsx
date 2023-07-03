import Image from "next/image";
import variables from '../styles/component.module.scss';
width:"5rem"
const Services = () => {
    return (<div>

        <div>
            <div>Frontend Development</div>
            <div style={{display: "flex", marginTop:"2rem"}}>
                <div>
                    <div className={variables.services_card_image_div}>
                        <Image className={variables.services_card_image} src={require("../public/images/html.png")} alt={"html logo"}/>
                    </div>
                    <div>HTML</div>
                </div>
                <div>
                    <div className={variables.services_card_image_div}>
                        <Image className={variables.services_card_image} src={require("../public/images/css.png")} alt={"css logo"}/>
                    </div>
                    <div>CSS</div>
                </div>
                <div>
                    <div className={variables.services_card_image_div}>
                        <Image className={variables.services_card_image} src={require("../public/images/javascript.jpeg")} alt={"html logo"}/>
                    </div>
                    <div>Javascript</div>
                </div>
                <div>
                    <div className={variables.services_card_image_div}>
                        <Image className={variables.services_card_image} src={require("../public/images/html.png")} alt={"html logo"}/>
                    </div>
                    <div>HTML</div>
                </div>
                <div>
                    <div className={variables.services_card_image_div}>
                        <Image className={variables.services_card_image} src={require("../public/images/html.png")} alt={"html logo"}/>
                    </div>
                    <div>HTML</div>
                </div>
            </div>
        </div>
    </div>)
}

export default Services;