"use client";

import { Envelope, GlobeHemisphereEast, Mailbox, Phone, Signpost } from "@phosphor-icons/react";
import Link from "next/link";
import { Dropdown,Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
const Navbarcomponents = () => {
    return(
        <>
        

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-col md:flex-row justify-between items-center mx-auto p-8 space-y-4 md:p-4">
        <a href="/" className="flex items-center space-x-3">
            <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/02/sydney_speech_tagline_0.png" className="h-32" alt="Logo" />
            
        </a>
        <div className="flex flex-col items-center justify-center space-y-4">
        
            <div className="flex flex-row space-x-2">
            <GlobeHemisphereEast className="text-color-secondary" size={32}/><a href="https://www.sydneyspeechclinic.com.au/ssc/#" className="text-base md:text-xl text-color-primary hover:underline">www.sydneyspeechclinic.com.au</a>
            </div>
            <div className="flex flex-row space-x-2">
            <Signpost className="text-color-secondary" size={32}/><a href="https://www.sydneyspeechclinic.com.au/ssc/#" className="text-base md:text-xl text-color-primary hover:underline">1 Pottery Lane,
            Lane Cove, 2066</a>
            </div>
            
             
        </div>
    </div>
</nav>
<Navbar style={{padding:'0'}} className="p-0 px-0" fluid rounded>
      <NavbarToggle style={{color:'#134a8e', position:'fixed', top:'0' }} />
      <NavbarCollapse id="NavbarCollapse" className="flex-auto bg-color-secondary p-2 mx-auto">
        <Link className="flex justify-center items-center w-24 text-color-white hover:bg-color-primary rounded-lg mb-4 md:mb-0" href="/">Home</Link>
        <Link className="flex justify-center  items-center w-24 text-color-white hover:bg-color-primary rounded-lg mb-4 md:mb-0" href="/about">Our Team</Link>
        <Link className="flex justify-center  items-center w-24 text-color-white hover:bg-color-primary rounded-lg mb-4 md:mb-0" href="#">Events</Link>
        <Dropdown  style={{height:"fit", color:'rgb(255 255 255)', backgroundColor:'#134a8e', borderWidth:'0', fontSize:'0.75em'}} color="light" className="border-0 text-xs" label="Therapy Services" dismissOnClick={false}>
      <Dropdown.Item>Online Therapy</Dropdown.Item>
      <Dropdown.Item>Individual Therapy</Dropdown.Item>
      <Dropdown.Item><Link href="/group-therapy-programs">Group Therapy Programs</Link></Dropdown.Item>
      <Dropdown.Item>Therapy Booking Process</Dropdown.Item>
      <Dropdown.Item>Therapy Programs</Dropdown.Item>
      <Dropdown.Item>Additional Therapy Services</Dropdown.Item>
    </Dropdown>

    <Dropdown  style={{height:"fit", color:'rgb(255 255 255)', backgroundColor:'#134a8e', borderWidth:'0', fontSize:'0.75em'}} color="light" className="border-0 text-xs" label="How We Help" dismissOnClick={false}>
      <Dropdown.Item>Speech</Dropdown.Item>
      <Dropdown.Item>Language</Dropdown.Item>
      <Dropdown.Item>Literacy</Dropdown.Item>
      <Dropdown.Item>Gross Motor</Dropdown.Item>
      <Dropdown.Item>Fine Motor</Dropdown.Item>
      <Dropdown.Item>Handwriting</Dropdown.Item>
    </Dropdown>

    <Dropdown  style={{height:"fit", color:'rgb(255 255 255)', backgroundColor:'#134a8e', borderWidth:'0'}} color="light" className="border-0" label="Useful Information" dismissOnClick={false}>
    <Dropdown style={{height:"fit",borderWidth:'0'}} color="light" className="border-0" label="Our Articles" dismissOnClick={false} placement="right-start">
      <Dropdown.Item><Link href="/blog">Article 1</Link></Dropdown.Item>
      <Dropdown.Item>Article 2</Dropdown.Item>
      <Dropdown.Item>Article 3</Dropdown.Item>
      <Dropdown.Item>Article 4</Dropdown.Item>
    </Dropdown>
      <Dropdown.Item>Links</Dropdown.Item>
      <Dropdown.Item>Speech Therapy Fact Sheets</Dropdown.Item>
      <Dropdown.Item>Communication Milestones</Dropdown.Item>
      <Dropdown.Item>FAQs</Dropdown.Item>
      <Dropdown.Item>Our Policies</Dropdown.Item>
    </Dropdown>
    

    <Link className="flex justify-center  items-center w-24 text-color-white hover:bg-color-primary rounded-lg mb-4 md:mb-0" href="#">Careers</Link>  
        <Link className="flex justify-center  items-center w-24 text-color-white hover:bg-color-primary rounded-lg mb-4 md:mb-0" href="/contact">Contact Us</Link>  
      </NavbarCollapse>
  
                
</Navbar>

        </>
    )
}

export default Navbarcomponents;