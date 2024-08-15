"use client"
import { Envelope, Phone } from "@phosphor-icons/react";

const FooterComponent = () =>{
    return(
        <div className=" w-full bg-color-secondary">
             <div className="flex flex-col md:flex-row items-center justify-evenly  space-y-4">
            <div className="flex flex-row justify-center items-center pt-4 space-x-2">
            <Envelope className="text-color-primary" size={32}/><a href="mailto:info@syndeyspeechclinic.com.au" className="text-xl text-color-primary hover:underline">info@syndeyspeechclinic.au</a>
            </div>
            <div className="flex flex-row space-x-2 bg-color-primary p-2 rounded-full justify-center items-center">
            <Phone className="text-color-secondary" size={40}/><a href="tel:0284040715" className="text-xl md:text-3xl text-color-secondary hover:underline">Contact Us: 02 8404 0715</a>
            </div>
            </div>
            <h1 className="text-center text-xl text-color-white mt-4">Copyright 2024 - Owen Rudiyanto So</h1>
        </div>
    )
}
export default FooterComponent