"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import logo from "@/app/assets/logo.png"
import {
    Menu, 
    Info, 
    ArrowLeft, 
    Phone,
    MapPin,
    Mail,
    Twitter,
    Facebook,
    Instagram,
    Linkedin
} from "lucide-react"

interface Props{
    children: React.ReactNode
}
export function Paragraph({children}: Props){
    return(
        <p className="font-extralight text-base font-sans cursor-pointer text-zinc-950 hover:text-amber-500">
            {children}
        </p>
    )
}
export default function NavBar(){
    const [stateSideBar, setStateSideBar] = useState(false)
    const [stateInfo, setStateInfo] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(()=>{
        function handleScroll(){
            while(window.scrollY > 20) {
                setShowNavbar(true);
                return
            }
            setShowNavbar(false) 
        }
        window.addEventListener('scroll', handleScroll);
    }, [])

    const navbarClasses = `fixed bg-zinc-50 w-full ${showNavbar && 'top-0'}`;

    return(
        <nav className={`${navbarClasses} flex justify-between shadow-[0_0_10px_0_rgba(0,0,0,0.75)] items-center py-[25px] px-2 z-10`}>
            {stateSideBar ? <ArrowLeft size={40} className="cursor-pointer lg:hidden" onClick={() => setStateSideBar(!stateSideBar)}/> : <Menu size={40} className="cursor-pointer lg:hidden" onClick={() => setStateSideBar(!stateSideBar)}/>}
            <div>
                <Image src={logo} alt="Imagem Logo" className="select-none"/>
            </div>
            <ul className="hidden lg:flex">
                <li><Link href="#" className="uppercase mx-4 text-amber-500 border-b-2 border-amber-500 text-xl">Home</Link></li>
                <li><Link href="#" className="uppercase mx-4 text-xl text-zinc-600 hover:border-b-2 hover:border-amber-500">About us</Link></li>
                <li><Link href="#" className=" uppercase mx-4 text-xl text-zinc-600 hover:border-b-2 hover:border-amber-500">Contacts</Link></li>
                <li><Link href="#" className="uppercase mx-4 text-xl text-zinc-600 hover:border-b-2 hover:border-amber-500">Typography</Link></li>
            </ul>
            <button className="hidden lg:block bg-amber-500 text-lg text-zinc-50 rounded-full px-8 py-3 uppercase tracking-wider hover:bg-blue-700">Book a tour now</button>
            <Info size={30} className="cursor-pointer lg:hidden" onClick={() => setStateInfo(!stateInfo)}/>
            <div className={`${stateSideBar ? "w-[250px]" : "hidden"} z-10 bg-zinc-50 h-screen lg:hidden top-0 left-0 fixed mt-24`} >
                <ul>
                    <li className="my-2"><Link href="#" className="uppercase text-zinc-600 text-xl px-2 hover:text-zinc-950 select-none">Home</Link></li>
                    <li className="my-2"><Link href="#" className="uppercase text-xl text-zinc-600 px-2 hover:text-zinc-950 select-none">About us</Link></li>
                    <li className="my-2"><Link href="#" className=" uppercase text-xl text-zinc-600 px-2 hover:text-zinc-950 select-none">Contacts</Link></li>
                    <li className="my-2"><Link href="#" className="uppercase text-xl text-zinc-600 px-2 hover:text-zinc-950 select-none">Typography</Link></li>
                </ul>
            </div>
            <div className={`${stateInfo ? "w-[250px]" : "hidden"} lg:hidden rounded top-0 select-none bg-zinc-50 right-0 fixed mt-[100px] mx-[5px] px-2 py-5 z-10`} >
                <div className="flex">
                    <Phone size={20} className="text-amber-500 mx-3" />
                    <Paragraph>1-800-1234-567</Paragraph>
                </div>
                <div className="flex my-2">
                    <MapPin size={35} className="text-amber-500 mx-3" />
                    <Paragraph>2130 Fulton Street, San Diego, CA 94117-1080 USA</Paragraph>
                </div>
                <div className="flex">
                    <Mail size={20} className="text-amber-500 mx-3"/>
                    <Paragraph>mail@demolink.org</Paragraph>
                </div>
                <div className="flex justify-between mx-10 my-3">
                    <Facebook className="text-zinc-950 hover:text-amber-500 cursor-pointer"/>
                    <Instagram className="text-zinc-950 hover:text-amber-500 cursor-pointer"/>
                    <Twitter className="text-zinc-950 hover:text-amber-500 cursor-pointer"/>
                    <Linkedin className="text-zinc-950 hover:text-amber-500 cursor-pointer"/>
                </div>
                <button className="bg-amber-500 text-lg text-zinc-50 rounded-full px-8 py-3 uppercase hover:bg-blue-700">Buy Ticket Now</button>
            </div>
        </nav>
    )
}