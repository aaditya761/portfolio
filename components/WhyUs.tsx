import variables from '../styles/component.module.scss';
import {Montserrat} from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'] })


const WhyUs = () => {
    return (<div className={variables.why_us_section}>
        <div className={variables.why_us_inner}>
            <div className={variables.why_us_left}>
                <div className={`${variables.section_title} ${montserrat.className}`}>
                    Why People Choose Us
                </div>
            </div>
            <div className={variables.why_us_right}>
                <div className={variables.why_us_container}>
                    <div style={{ borderLeft:'15px solid #ff9e18', borderRight:'15px solid #ff9e18'}} className={`${variables.wu_item} ${variables.fadeIn}`}>
                        <div className={`${variables.wu_title} ${montserrat.className}`}>
                            Expertise
                        </div>
                        <div className={`${variables.wu_description} ${montserrat.className}`}>
                            Our highly skilled team of developers and engineers has 7+ years of software industry
                            experience. We stay updated with the latest technologies and trends, offering cutting-edge
                            solutions. With a successful track record in various industries, our experts deliver
                            exceptional results.
                        </div>
                    </div>
                    <div style={{ borderLeft:"15px solid #00263e", borderRight:"15px solid #00263e"}} className={`${variables.wu_item} ${variables.fadeIn}`}>
                        <div className={`${variables.wu_title} ${montserrat.className}`}>
                            Customized Solutions
                        </div>
                        <div className={`${variables.wu_description} ${montserrat.className}`}>
                            We understand your business needs and objectives to create a customized software solution.
                            Working closely with you, we analyze workflows, identify pain points, and develop a precise
                            solution for your unique challenges. Our focus is on scalability and flexibility, allowing
                            your software to adapt and grow with your evolving business.
                        </div>
                    </div>
                    <div style={{ borderLeft:"15px solid #00c18b", borderRight:"15px solid #00c18b"}} className={`${variables.wu_item} ${variables.fadeIn}`}>
                        <div className={`${variables.wu_title} ${montserrat.className}`}>
                            Timely Delivery
                        </div>
                        <div className={`${variables.wu_description} ${montserrat.className}`}>
                            Our proven project management methodologies ensure on-time delivery by setting realistic
                            timelines and meeting deadlines. We prioritize timely completion of milestones and
                            deliverables through efficient development processes and rigorous quality assurance
                            practices, ensuring high-quality software.
                        </div>
                    </div>
                    <div className={`${variables.wu_item} ${variables.fadeIn}`}>
                        <div className={`${variables.wu_title} ${montserrat.className}`}>
                            Customer Support
                        </div>
                        <div className={`${variables.wu_description} ${montserrat.className}`}>
                            We prioritize strong client relationships and exceptional customer support throughout the
                            project lifecycle. Our dedicated team is available to address any questions, concerns, or
                            issues during development and post-launch. We involve you in the development process through
                            regular meetings, progress updates, and feedback, ensuring the final product aligns
                            perfectly with your vision.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default WhyUs;