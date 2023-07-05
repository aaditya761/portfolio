import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('@/components/Navbar'));
const Hero = dynamic(() => import('@/components/Hero'));
const SuccessStories = dynamic(() => import('@/components/Success-Stories'));
const WhyUs = dynamic(() => import('@/components/WhyUs'));
const Transform = dynamic(() => import('@/components/Transform'));
const Process = dynamic(() => import('@/components/Process'));
const Services = dynamic(() => import('@/components/Services'));
const ContactUs = dynamic(() => import('@/components/ContactUs'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));


import {Montserrat} from "next/font/google";
const montserrat = Montserrat({subsets: ['latin']})

export default function Home() {
    return (
        <div className={montserrat.className}>
            <div>
                <Navbar/>
                <Hero/>
                <Services />
                <Process />
                <Transform />
                <WhyUs />
                <SuccessStories />
                <Testimonials/>
                <ContactUs />
            </div>
        </div>
    )
}
