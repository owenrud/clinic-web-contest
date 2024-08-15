import Image from "next/image";

import { Carousel } from "flowbite-react";
import Link from "next/link";
import { ArrowArcRight } from "@phosphor-icons/react/dist/ssr";
import FooterComponent from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        className="relative"
        style={{ padding: "0", margin: "0" }}
        slide={false}
      >
        <div className="relative">
          <img
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2020/04/online_therapy.jpg"
            alt="..."
          />
          <h1 className="absolute md:left-[15%] top-[65%] md:top-[60%] text-color-white text-xs md:text-4xl text-center   z-10 bg-color-secondary rounded-lg w-auto px-3 py-2.5 bg-opacity-50 font-bold">
            Online Speech Therapy and Occupational Therapy Available
          </h1>
        </div>
        <div className="relative">
          <img
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/GirlWithLetters.jpg"
            alt="..."
          />
          <h1 className="absolute sm:w-full md:left-[15%] top-[65%] md:top-[60%] text-color-white text-xs md:text-4xl text-center   z-10 bg-color-secondary rounded-lg w-auto px-3 py-2.5 bg-opacity-50 font-bold">
            Enhancing Speech, Language and Literacy Skills
          </h1>
        </div>
        <div className="relative">
          <img
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/ColourfullHandsInSky.jpg"
            alt="..."
          />
          <h1 className="absolute md:left-[15%] top-[65%] md:top-[60%] text-color-white  text-xs md:text-4xl text-center   z-10 bg-color-secondary rounded-lg w-auto px-3 py-2.5 bg-opacity-50 font-bold">
            Helping Each Client Reach Their Potential
          </h1>
        </div>
        <div className="relative">
          <img
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/GirlByWater.jpg"
            alt="..."
          />
          <h1 className="absolute md:left-[15%] top-[65%] md:top-[60%] text-color-white  text-xs md:text-4xl text-center   z-10 bg-color-secondary rounded-lg w-auto px-3 py-2.5 bg-opacity-50 font-bold">
            Building Confidence in Communication
          </h1>
        </div>
        <div className="relative">
          <img
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/GirlWriting.jpg"
            alt="..."
          />
          <h1 className="absolute sm:w-auto md:left-[15%] top-[65%] md:top-[60%] text-color-white text-xs md:text-2xl text-center   z-10 bg-color-secondary rounded-lg w-auto px-3 py-2.5 bg-opacity-50 font-bold">
            Laying Strong Foundations For Academic Success
          </h1>
        </div>
        <div className="relative">
          <img className="w-full"
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2019/02/022A5408_1000.jpg"
            alt="..."
          />
          <h1 className="absolute md:left-[15%] top-[65%] md:top-[55%] text-color-white text-color-white text-xs md:text-2xl text-center   z-10 bg-color-secondary rounded-lg w-auto px-3 py-2.5 bg-opacity-50 font-bold">
            Speech Therapy and Occupational Therapy Clinic
          </h1>
        </div>
      </Carousel>
      <div className="absolute  text-center w-full px-2 py-4 bg-color-secondary">
        <h1 className="font-bold text-xs md:text-2xl text-color-white">
          Speech and Occupational Therapy Available... please{" "}
          <Link className="hover:underline" href="#">
            Email or Call Us
          </Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-32 p-8">
        <div className="relative w-full border bg-color-primary rounded-lg hover:scale-105 hover:transition-all">
          <img
            className="h-full"
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/shutterstock_144566138.jpg"
          ></img>
          <div className="absolute w-full bottom-0 text-center text-color-white px-auto bg-color-secondary py-2.5">
            How We Help
          </div>
        </div>
        <div className="relative w-full border bg-color-primary  rounded-lg hover:scale-105 hover:transition-all">
          <img
            className="h-full"
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/shutterstock_130517294.jpg"
          ></img>
          <div className="absolute w-full bottom-0 text-center text-color-white px-auto bg-color-secondary py-2.5">
            Therapy Process
          </div>
        </div>
        <div className="relative w-full border bg-color-primary  rounded-lg hover:scale-105 hover:transition-all">
          <img
            className="h-full"
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/shutterstock_130517294.jpg"
          ></img>
          <div className="absolute w-full bottom-0 text-center text-color-white px-auto bg-color-secondary py-2.5">
            Therapy Process
          </div>
        </div>
        <div className="relative w-full border bg-color-primary  rounded-lg hover:scale-105 hover:transition-all">
          <img
            className="h-full"
            src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/03/shutterstock_130517294.jpg"
          ></img>
          <div className="absolute w-full bottom-0 text-center text-color-white px-auto bg-color-secondary py-2.5">
            Therapy Process
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  justify-evenly space-y-8 space-x-4 mt-16 p-8 ">
        <img className="shadow-lg" src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2016/02/CPSP.png"></img>
        <iframe className="w-64 h-64 md:w-full md:h-96" style={{border: "0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.949283667764!2d151.1684715901508!3d-33.81362185368105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabc85055d076c3c3!2sSydney+Speech+Clinic!5e0!3m2!1sen!2sau!4v1535514902945" width="600" height="450" frameborder="0" allowFullScreen="allowfullscreen"></iframe>
        </div>
        <FooterComponent/>
    </div>
    
  );
}
