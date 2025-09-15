"use client";
import GradientText from "@/components/GradientText";
import Nav from "./components/Nav";
import Buttons from "./components/Buttons";
import { FaShopify } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Services from "./components/Services";
import { IoPeople } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ScrollVelocity from "@/components/ScrollVelocity";
import DomeGallery from "@/components/DomeGallery";

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col justify-center items-center pl-20 pr-20 pt-4 selection:bg-pink-500 selection:text-white max-md:pl-5 max-md:pr-5">
      {/* // Nav // */}
      <header className="w-full">
        <Nav />
      </header>
      {/* // Banner // */}
      <section className="mt-20 w-full min-h-100 flex items-center justify-center flex-col z-0 bg-transparent">
        <GradientText
          className="text-8xl font-bold text-center max-md:text-7xl"
          colors={["#ff0080", "#7928ca", "#2afadf"]}
          animationSpeed={6}
        >
          Boost Your Ads
          <br />
          Maximize Your Profit.
        </GradientText>
        <p className="text-white p-10 text-xl w-[65%] text-center max-lg:w-[90%]">
          With 1+ years of experience, 50+ brands served, and 40+ Lack in
          managed spend, our dedicated team consistently delivers measurable
          results for clients worldwide.
        </p>
        <Buttons>Get In Touch</Buttons>
        <p className="mt-5 text-white p-3">
          Our Performance Marketing Services are Certified by
        </p>
        <div className="flex gap-10">
          <FaShopify className="text-green-500 text-5xl" />
          <FaMeta className="text-blue-500 text-5xl" />
          <FcGoogle className="text-5xl" />
        </div>
      </section>
      {/* // Our Services // */}
      <section className="border-2 mt-32 w-full h-full bg-white/12 flex  flex-col justify-center items-center p-5 rounded-2xl">
        <h1 className="mt-5 text-6xl font-black bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-transparent bg-clip-text max-md:text-center">
          Our Services
        </h1>
        <div className="w-[100%] flex gap-8 p-20 max-lg:flex-col max-md:p-4">
          <div className="w-[50%] flex flex-col gap-14 mt-10 max-lg:w-[100%]">
            <Services
              icon={<HiOutlineSpeakerphone />}
              title="Strategic Marketing"
              description="Catapult your brand into the spotlight with our genius strategies – it’s like magic, but for marketing."
            />
            <Services
              icon={<IoPeople />}
              title="Social Media Management"
              description="Hands-free social success! While you focus on your cat videos, we’ll make sure your brand shines across all social platforms."
            />
            <Services
              icon={<GoGraph />}
              title="Search Engine Optimization (SEO)"
              description="Boost your online swagger! We’ll spruce up your website so Google has no choice but to be your biggest fan."
            />
          </div>
          <div className="w-[50%] flex flex-col gap-14 mt-10 max-lg:w-[100%]">
            <Services
              icon={<HiOutlineSpeakerphone />}
              title="Strategic Marketing"
              description="Catapult your brand into the spotlight with our genius strategies – it’s like magic, but for marketing."
            />
            <Services
              icon={<IoPeople />}
              title="Social Media Management"
              description="Hands-free social success! While you focus on your cat videos, we’ll make sure your brand shines across all social platforms."
            />
            <Services
              icon={<GoGraph />}
              title="Search Engine Optimization (SEO)"
              description="Boost your online swagger! We’ll spruce up your website so Google has no choice but to be your biggest fan."
            />
          </div>
        </div>
      </section>
      {/* // service 1 // */}
      <section
        id="service"
        className="mt-32 w-full h-[600px] bg-white/12 flex  flex-row justify-center items-center p-5 rounded-2xl max-lg:flex-col"
      >
        <div className="w-[50%] h-full flex items-center flex-col justify-center max-lg:w-[100%]">
          <Services
            hclass="text-4xl pb-5"
            title="Strategic Marketing"
            description="Your brand deserves more than visibility — it deserves impact. We craft campaigns that put you in the spotlight where it truly matters."
          />
          <div className="w-full mt-2 flex flex-wrap gap-5 p-3">
            <Buttons>Google Ads</Buttons>
            <Buttons>Facebook Ads</Buttons>
          </div>
        </div>
        <div className="w-[50%] h-full p-7  max-lg:w-[100%]">
          <div className="w-[100%] h-full bg-gradient-to-l to-pink-500 from-orange-400 rounded-2xl">
            <DotLottieReact
              src="https://lottie.host/970516f8-4b20-43a2-bb13-463a31038eac/o8xSG5wmbK.lottie"
              loop
              autoplay
              className="w-[100%] h-full"
            />
          </div>
        </div>
      </section>
      {/* // service 2 // */}
      <section className="mt-32 w-full h-[600px] bg-white/12 flex  flex-row justify-center items-center p-5 rounded-2xl max-lg:flex-col">
        <div className="w-[50%] h-full p-7 max-lg:w-[100%]">
          <div className="w-[100%] h-full bg-gradient-to-l to-pink-500 from-orange-400 rounded-2xl">
            <DotLottieReact
              src="https://lottie.host/1e8cd5ea-47b4-45d5-91b8-23e8b2118246/V2qRGDbCuv.lottie"
              loop
              autoplay
              className="w-[100%] h-full"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex items-center flex-col justify-center max-lg:w-[100%]">
          <Services
            hclass="text-4xl pb-5"
            title="Eye-catchy Designs"
            description="We create visuals that captivate and connect with your audience. Are you ready to transform your brand into something unforgettable?"
          />
          <div className="w-full mt-2 flex flex-wrap gap-5 p-3">
            <Buttons>Ads</Buttons>
            <Buttons>Videos</Buttons>
            <Buttons>Social Media</Buttons>
          </div>
        </div>
      </section>
      {/* // service 3 // */}
      <section className="mt-32 w-full h-[600px] bg-white/12 flex  flex-row justify-center items-center p-5 rounded-2xl max-lg:flex-col">
        <div className="w-[50%] h-full flex items-center flex-col justify-center max-lg:w-[100%]">
          <Services
            hclass="text-4xl pb-5"
            title="Social Media"
            description="Make your brand the conversation starter! Our Social Media Management expertise ensures your message resonates and shines across every digital platform."
          />
          <div className="w-full mt-2 flex flex-wrap gap-5 p-3">
            <Buttons>Google Ads</Buttons>
            <Buttons>Facebook Ads</Buttons>
          </div>
        </div>
        <div className="w-[50%] h-full p-7 max-lg:w-[100%]">
          <div className="w-[100%] h-full bg-gradient-to-l to-pink-500 from-orange-400 rounded-2xl">
            <DotLottieReact
              src="https://lottie.host/bb9a8897-1fe5-43c3-a98a-ff85a901595f/ofrDSgn0HL.lottie"
              loop
              autoplay
              className="w-[100%] h-full"
            />
          </div>
        </div>
      </section>
      {/* // service 4 // */}
      <section className="mt-32 w-full h-[600px] bg-white/12 flex  flex-row justify-center items-center p-5 rounded-2xl max-lg:flex-col">
        <div className="w-[50%] h-full p-7 max-lg:w-[100%]">
          <div className="w-[100%] h-full bg-gradient-to-l to-pink-500 from-orange-400 rounded-2xl">
            <DotLottieReact
              src="https://lottie.host/13732ba4-cbfc-4b32-8312-7fa4989eccc9/pKhF2pkXUu.lottie"
              loop
              autoplay
              className="w-[100%] h-full"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex items-center flex-col justify-center max-lg:w-[100%]">
          <Services
            hclass="text-4xl pb-5"
            title="Automation"
            description="Efficiency Meets Excellence — Automate repetitive tasks so your team can concentrate on what truly matters."
          />
          <div className="w-full mt-2 flex flex-wrap gap-5 p-3">
            <Buttons>CRM</Buttons>
            <Buttons>Lead Gen</Buttons>
            <Buttons>Business Flow</Buttons>
          </div>
        </div>
      </section>
      {/* // service 5 // */}
      <section className="mt-32 w-full h-[600px] bg-white/12 flex  flex-row justify-center items-center p-5 rounded-2xl max-lg:flex-col">
        <div className="w-[50%] h-full flex items-center flex-col justify-center max-lg:w-[100%]">
          <Services
            hclass="text-4xl pb-5"
            title="Web Development"
            description="Technical Solutions — Ensuring seamless online experiences by solving problems before your users even notice them."
          />
          <div className="w-full mt-2 flex flex-wrap gap-5 p-3">
            <Buttons>Website Development</Buttons>
            <Buttons>Landing Pages</Buttons>
            <Buttons>Shopify Store</Buttons>
            <Buttons>Wordpress</Buttons>
          </div>
        </div>
        <div className="w-[50%] h-full p-7 max-lg:w-[100%]">
          <div className="w-[100%] h-full bg-gradient-to-l to-pink-500 from-orange-400 rounded-2xl">
            <DotLottieReact
              src="https://lottie.host/8125395d-99b5-4374-8b30-7427d5c0f6fb/Hi75tx1Fi1.lottie"
              loop
              autoplay
              className="w-[100%] h-full"
            />
          </div>
        </div>
      </section>
      {/* // service 6 // */}
      <section className="mt-32 w-full h-[600px] bg-white/12 flex  flex-row justify-center items-center p-5 rounded-2xl max-lg:flex-col">
        <div className="w-[50%] h-full p-7 max-lg:w-[100%]">
          <div className="w-[100%] h-full bg-gradient-to-l to-pink-500 from-orange-400 rounded-2xl">
            <DotLottieReact
              src="https://lottie.host/267195d3-50e3-477a-ace9-14c98896279a/355r9DWZy2.lottie"
              loop
              autoplay
              className="w-[100%] h-full"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex items-center flex-col justify-center max-lg:w-[100%]">
          <Services
            hclass="text-4xl pb-5"
            title="Robust SEO"
            description="Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO."
          />
          <div className="w-full mt-2 flex flex-wrap gap-5 p-3">
            <Buttons>Social Media</Buttons>
            <Buttons>Ads</Buttons>
            <Buttons>Videos</Buttons>
          </div>
        </div>
      </section>
      {/* // Scroll XYZ // */}
      <section className="relative w-full h-auto mt-68">
        <section className="mt-32 w-full h-auto rotate-[-8deg]  ">
          <ScrollVelocity
            texts={["Team 99", "Marketing"]}
            className="custom-scroll-text  text-black bg-pink-400"
          />
        </section>
        <section className="absolute top-0 mt-32 w-full h-auto rotate-6  ">
          <ScrollVelocity
            texts={["Team 99", "Marketing"]}
            className="custom-scroll-text text-black bg-amber-400"
          />
        </section>
      </section>
      {/* // Our Team // */}
      <section id="team" className="w-[100%] h-auto mt-68 bg-black">
        <section className="w-full mt-44 text-center ">
          <h1 className="mt-5 text-6xl font-black bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-transparent bg-clip-text">
            Our Team
          </h1>
        </section>
        <section
          className="mt-32 flex flex-col items-center justify-center"
          style={{ width: "100%", height: "70vh" }}
        >
          <DomeGallery />
        </section>
      </section>
      {/* // How Its Start// */}
      <section className="mt-32 w-full h-[600px] bg-white/12 flex  flex-col  text-center p-5 rounded-2xl max-lg:h-auto">
        <h1 className="mt-5 text-6xl font-black bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-transparent bg-clip-text">
          How It Starts
        </h1>
        <div className="w-full h-full mt-20 p-10 flex gap-10 max-lg:flex-col">
          <div className="w-[50%] text-start flex flex-col gap-10 max-lg:w-[100%]">
            <Services
              hclass="text-3xl pb-2"
              title="Plan Your Growth"
              description="Dream big, strategize with us, and turn plans into profits."
              icon="1-"
              iclass="font-bold"
            />
            <Services
              hclass="text-3xl pb-2"
              title="Handover the project"
              description="We're your project navigators, turning plans into reality. Smooth sailing guaranteed."
              icon="2-"
              iclass="font-bold"
            />
            <Services
              hclass="text-3xl pb-2"
              title="Count the profit"
              description="Sit back, relax, and let the profits set sail. Your success story starts with us!"
              icon="3-"
              iclass="font-bold"
            />
          </div>
          <div className="w-[50%] h-full bg-gradient-to-l to-pink-500 from-orange-400 rounded-2xl flex justify-center items-center max-lg:w-[100%]">
            <DotLottieReact
              src="https://lottie.host/743bd107-fc28-4950-8600-5909fe677dd1/AEb6R5VrBQ.lottie"
              loop
              autoplay
              className="w-[50%] h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
