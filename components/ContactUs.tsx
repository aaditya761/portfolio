"use client";
import {useState} from "react";
import variables from "../styles/component.module.scss";
import {Montserrat} from "next/font/google";
import Lottie from "lottie-react";

const montserrat = Montserrat({subsets: ["latin"]});

const SERVICE_ID = "service_dyrddmk";
const TEMPLATE_ID = "template_yamhtin";
const PUBLIC_KEY = "d6D5TvKmiiFLwx6VF";
import Success from "../public/images/success.json";
import Loader from "../public/images/loader.json";

const ContactUs = () => {
    const [contactData, setContactData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async () => {
        setIsLoading(true);
        let params = {
            user_id: PUBLIC_KEY,
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            template_params: {
                user_name: contactData.user_name,
                user_email: contactData.user_email,
                message: contactData.message,
                reply_to: contactData.user_email,
            },
        };

        let headers = {
            "Content-type": "application/json",
        };

        let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(params),
        };
        await fetch("https://api.emailjs.com/api/v1.0/email/send", options)
            .then((res) => {
                setIsLoading(false);
                setIsSuccessMessageVisible(true)
                setTimeout(() => {
                    setIsSuccessMessageVisible(false);
                }, 3000)
            })
            .catch((error) => {
                console.log("Oops... " + error);
            });

        setContactData({user_name: "", user_email: "", message: ""});
    };

    return (
        <div id={"contact-us"} className={variables.transform_container}>
            <div className={variables.transform_inner}>
                <div className={`${variables.transform_title} ${montserrat.className}`}>
                    Wanna talk with us
                </div>
                <div className={`${variables.transform_desc} ${montserrat.className}`}>
                    Get ready to unlock the power of technology to accelerate your growth
                </div>
                <form>
                    <div className={variables.contact_form}>
                        <div>
                            <input
                                name="user_name"
                                className={variables.contact_input}
                                type="text"
                                placeholder="Name"
                                value={contactData.user_name}
                                onChange={(e) =>
                                    setContactData({...contactData, user_name: e.target.value})
                                }
                            />
                        </div>
                        <div>
                            <input
                                name="user_email"
                                className={variables.contact_input}
                                type="email"
                                placeholder="Email"
                                value={contactData.user_email}
                                onChange={(e) =>
                                    setContactData({...contactData, user_email: e.target.value})
                                }
                            />
                        </div>
                    </div>
                    <div>
            <textarea
                name="message"
                className={variables.contact_textarea}
                placeholder="Write your Message..."
                rows={4}
                value={contactData.message}
                onChange={(e) =>
                    setContactData({...contactData, message: e.target.value})
                }
            />
                    </div>
                </form>
                <div className={variables.transform_button}>
                    <div
                        className={`${variables.transform_btn_text} ${montserrat.className}`}
                        onClick={() => sendEmail()}
                    >
                        Send Message
                    </div>
                </div>
            </div>
            {isLoading ? <div className={variables.loader_container}>
                <Lottie style={{height:"15rem"}} animationData={Loader}/>
            </div> : null}
            {isSuccessMessageVisible ? <div className={variables.mail_sent_container}>
                <div style={{position:"fixed", top:"50%"}} className={`${variables.transform_title} ${montserrat.className}`}>Message sent successfully</div>
                <Lottie animationData={Success}/>
            </div> : null}
        </div>
    );
};

export default ContactUs;
