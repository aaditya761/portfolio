import { Inter } from 'next/font/google'
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SuccessStories from "@/components/Success-Stories";
import WhyUs from "@/components/WhyUs";
import Transform from "@/components/Transform";
import Process from "@/components/Process";
import Services from "@/components/Services";
import ContactUs from '@/components/ContactUs';

const inter = Inter({
    subsets: ["latin"],
    weight: ['400', '500', '600']
})

export default function Home() {
    return (
        <div className={inter.className}>
            <div>
                <Navbar/>
                <Hero/>
                <SuccessStories />
                <WhyUs />
                <Transform />
                <About/>
                <Process />
                <ContactUs />
                <Services />
            </div>
        </div>
    )
}
