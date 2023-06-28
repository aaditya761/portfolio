import Image from "next/image";

const Services = () => {
    return (<div>

        <div>
            <div>Frontend Development</div>
            <div style={{display: "flex", marginTop:"2rem"}}>
                <div>
                    <div style={{width:"5rem"}}>
                        <Image style={{objectFit:"contain", width:"100%"}} src={require("../public/images/html.png")} alt={"html logo"}/>
                    </div>
                    <div>HTML</div>
                </div>
                <div>
                    <Image src={require("../public/images/html.png")} alt={"html logo"}/>
                    <div>HTML</div>
                </div>
                <div>
                    <Image src={require("../public/images/html.png")} alt={"html logo"}/>
                    <div>HTML</div>
                </div>
                <div>
                    <Image src={require("../public/images/html.png")} alt={"html logo"}/>
                    <div>HTML</div>
                </div>
                <div>
                    <Image src={require("../public/images/html.png")} alt={"html logo"}/>
                    <div>HTML</div>
                </div>
            </div>
        </div>
    </div>)
}

export default Services;