"use client"
import variables from '../styles/component.module.scss';
import Image from 'next/image'

const SuccessStories = () => {

    const openLink = (url:string)=>{
        window.open(url, "_blank")
    }

    const data: Array<{
        id: string,
        image: string,
        url: string,
        name: string,
        industry: string,
        description: string
    }> = [
        {
            id: "1",
            image: require("../public/images/stanza.png"),
            url: "https://www.stanzaliving.com/",
            industry:"Co-living",
            name: "Stanza Living",
            description: "India's largest managed-accommodation space provider is home to Students and Working professionals across 26 cities in India"

        },
        {
            id: "2",
            image: require("../public/images/asian.webp"),
            url: "https://www.asianfootwears.com/",
            industry:"Footwear",
            name: "Asian Footwear",
            description: "Curated Footwear Collections - Designed for top-notch performance & maximum comfort to help you reach your full potential"

        },
        {
            id: "3",
            image: require("../public/images/seniority.jpg"),
            url: "https://seniority.in/",
            industry:"Health Care",
            name: "Seniority",
            description: "Online Shopping for Seniors - Senior Care Products Online"

        },
        {
            id: "4",
            image: require("../public/stanza.png"),
            url: "https://www.stanzaliving.com/",
            industry:"Co-living",
            name: "Stanza Living",
            description: "India's largest managed-accommodation space provider is home to Students and Working professionals across 26 cities in India"

        }
    ]

    return (<div className={variables.success_section}>
        <div className={variables.success_container}>
            {
                data.map((item) => {
                    console.log(item)
                    return (
                        <div onClick={()=>{openLink(item.url)}} className={variables.success_card} key={item.id}>
                            <div>
                                <Image className={variables.success_card_image} src={item.image}
                                       alt={"success-story-image"}/>
                            </div>
                            <div className={variables.success_industry_div}>
                                <div className={variables.success_industry_text}>Industry: {item.industry}</div>
                            </div>
                            <div className={variables.success_desc_cont}>
                                <div className={variables.success_title}>
                                    {item.name}
                                </div>
                                <div className={variables.success_desc}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>)
}

export default SuccessStories;
