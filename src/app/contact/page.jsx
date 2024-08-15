"use client";
import FooterComponent from "@/components/Footer";
import {
  Envelope,
  GlobeHemisphereEast,
  Mailbox,
  Phone,
  Signpost,
} from "@phosphor-icons/react";
const Page = () => {
  return (
    <>
      <h1 className="w-full bg-color-primary py-5 text-center text-color-white font-bold text-2xl">
        Contact Us
      </h1>
      <div className="flex flex-col p-8">
        <div className="flex flex-row justify-center items-center space-x-2">
          <Envelope className="text-color-primary" size={32} />
          <a
            href="mailto:info@syndeyspeechclinic.com.au"
            className="text-base md:text-xl text-color-primary hover:underline"
          >
            info@syndeyspeechclinic.au
          </a>
        </div>
        <div className="flex flex-row space-x-2 rounded-full justify-center items-center">
          <Phone className="text-color-secondary" size={40} />
          <a
            href="tel:0284040715"
            className="text-base md:text-xl text-color-secondary hover:underline"
          >
            Contact Us: 02 8404 0715
          </a>
        </div>
        <div className="flex flex-row space-x-2 justify-center items-center">
          <GlobeHemisphereEast className="text-color-secondary" size={32} />
          <a
            href="https://www.sydneyspeechclinic.com.au/ssc/#"
            className="text-base md:text-xl text-color-primary hover:underline"
          >
            www.sydneyspeechclinic.com.au
          </a>
        </div>
        <div className="flex flex-row space-x-2 justify-center items-center">
          <Signpost className="text-color-secondary" size={32} />
          <a
            href="https://www.sydneyspeechclinic.com.au/ssc/#"
            className="text-base md:text-xl text-color-primary hover:underline"
          >
            1 Pottery Lane, Lane Cove, 2066
          </a>
        </div>
        <h1 className="mt-4 text-color-secondary font-semibold text-xl">
          Finding Us
        </h1>
        <h2 className="text-justify">
          Sydney Speech Clinic is conveniently located in the centre of Lane
          Cove. The clinic is situated on the ground floor of 1 Pottery Lane,
          Lane Cove (on the corner of Pottery Lane and Little Street). The new
          clinic premises can be found directly behind The Longueville Hotel,
          and opposite the Lane Cove Aquatic Centre. The main entrance to the
          clinic is on Pottery Lane, just next to Sydney Community Services.
        </h2>
        <h2 className="text-justify mt-4">
        There are a variety of free car parking options including Little
          Street (3 hours) and the Woolworths complex (3 hours) - both within
          walking distance to the clinic.
        </h2>
        <div className="mt-4 rounded-lg flex flex-col md:flex-row border-2 shadow shadow-color-primary space-x-4 p-4 items-center justify-center">
        <iframe className="mt-8 w-64 h-64 md:h-screen md:w-full" style={{border: "0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.949283667764!2d151.1684715901508!3d-33.81362185368105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabc85055d076c3c3!2sSydney+Speech+Clinic!5e0!3m2!1sen!2sau!4v1535514902945" width="600" height="450" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <img className="mt-8 "
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2019/02/022A5408_1000.jpg"
            alt="..."
          />
        </div>
        
      </div>
      <FooterComponent/>
    </>
  );
};
export default Page;
