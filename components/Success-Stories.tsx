"use client"
import variables from '../styles/component.module.scss';
import Image from 'next/image';
import {Montserrat} from "next/font/google";
import Stanza from "../public/images/clients/stanza.png";
import Asian from "../public/images/clients/asian.webp";
import Seniority from "../public/images/clients/seniority.jpg";
import Maker from "../public/images/clients/maker.png";

const montserrat = Montserrat({subsets: ['latin']})

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const SuccessStories = () => {

    const indicatorStyles = {
        background: '#fff',
        width: 14,
        height: 14,
        borderRadius:7,
        cursor:"pointer",
        border:"2px solid black",
        display: 'inline-block',
        margin: '-5px 8px',
    };

    const openLink = (url: string) => {
        window.open(url, "_blank")
    }

    const data: Array<{
        id: string,
        image: any,
        url: string,
        name: string,
        industry: string,
        description: string
    }> = [
        {
            id: "1",
            image: Stanza,
            url: "https://www.stanzaliving.com/",
            industry: "Co-living",
            name: "Stanza Living",
            description: "India's largest managed-accommodation space provider is home to Students and Working professionals across 26 cities in India"

        },
        {
            id: "2",
            image: Asian,
            url: "https://www.asianfootwears.com/",
            industry: "Footwear",
            name: "Asian Footwear",
            description: "Curated Footwear Collections - Designed for top-notch performance & maximum comfort to help you reach your full potential"

        },
        {
            id: "3",
            image: Seniority,
            url: "https://seniority.in/",
            industry: "Health Care",
            name: "Seniority",
            description: "Online Shopping for Seniors - Senior Care Products Online"

        },
        {
            id: "4",
            image: Maker,
            url: "https://makerandson.com/",
            industry: "Luxury Sofas",
            name: "Maker&Son",
            description: "Luxury Sofas and Beds Handmade In The UK From Natural Sustainable Materials, Bedroom Furniture, Bespoke Mobile ShowroomDog Beds, Mattress & Topper Rugs"

        }
    ]

    return (<div id={"clients"} className={variables.section}>
        <div className={variables.success_inner}>
            <div style={{padding: "4rem", color: "white"}}
                 className={`${variables.section_title} ${montserrat.className}`}>
                Some of Our Clients
            </div>
            <Carousel
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                onClick={onClickHandler}
                                style={{...indicatorStyles, background: '#000'}}
                            />
                        );
                    }else {
                        return (
                            <li
                                onClick={onClickHandler}
                                style={{...indicatorStyles, background: 'white'}}
                            />
                        );
                    }
                }}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                showArrows={false}
                thumbWidth={160}
                centerMode={true}
                transitionTime={3000}
                centerSlidePercentage={30}
            >
            {/*<div className={variables.success_container}>*/}
                {
                    data.map((item) => {
                        return (
                            <div onClick={() => {
                                openLink(item.url)
                            }} className={variables.success_card} key={item.id}>
                                <div className={variables.success_card_ing_div}>
                                    <div className={variables.success_card_overlay}></div>
                                    <Image className={variables.success_card_image} src={item.image}
                                           alt={"success-story-image"}/>
                                </div>
                                <div className={variables.success_industry_div}>
                                    <div
                                        className={`${variables.success_industry_text} ${montserrat.className}`}>Industry: {item.industry}</div>
                                </div>
                                <div className={variables.success_desc_cont}>
                                    <div className={`${variables.success_title} ${montserrat.className}`}>
                                        {item.name}
                                    </div>
                                    <div className={`${variables.success_desc} ${montserrat.className}`}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            {/*</div>*/}
            </Carousel>
        </div>
    </div>)
}

export default SuccessStories;
