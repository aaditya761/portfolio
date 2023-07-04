"use client"; 

import { useEffect } from 'react';
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
import Testimonials from "@/components/Testimonials";
import variables from '../styles/component.module.scss';

const inter = Inter({
    subsets: ["latin"],
    weight: ['400', '500', '600']
})

export default function Home() {

    useEffect(()=>{
        function reveal() {
            const fadeInDiv =  document.getElementsByClassName(variables.fadeIn);
            for (var i = 0; i < fadeInDiv.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = fadeInDiv[i].getBoundingClientRect().top;
              var elementVisible = 150;
              if (elementTop < windowHeight - elementVisible) {
                  fadeInDiv[i].classList.add(variables.animationCSS);
                } else {
                    fadeInDiv[i].classList.remove(variables.animationCSS);
                }
            }
        }
        window.addEventListener("scroll",reveal)
    },[])

    return (
        <div className={inter.className}>
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
