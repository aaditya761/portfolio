import { Inter } from 'next/font/google'
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SuccessStories from "@/components/Success-Stories";

const inter = Inter({
    subsets: ["latin"],
    weight: ['400', '500', '600']
})

export default function Home() {
    return (
        <div className={inter.className}>
            <main>
                <Navbar/>
                <Hero/>
                <SuccessStories />
                <About/>
            </main>
        </div>
    )
}
