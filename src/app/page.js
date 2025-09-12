import Lottie from "lottie-react";
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

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center pl-20 pr-20 pt-4">
      <section className="w-full bg-white/12 rounded-2xl">
        <Nav />
      </section>
      <section className="mt-20 w-full min-h-100 flex items-center justify-center flex-col">
        <GradientText
          className="text-8xl font-bold text-center"
          colors={["#ff0080", "#7928ca", "#2afadf"]}
          animationSpeed={6}
        >
          Optimize Your <br /> Ads For More Profit.
        </GradientText>
        <p className="text-white p-10 text-xl w-[60%] text-center">
          5+ years | 511+ Brands | 60+ Crore Ad spent A dedicated team of
          specialists, delivering remarkable work to our clients worldwide!
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
      <section className="mt-32 w-full h-full bg-white/12 flex  flex-col justify-center items-center p-5 rounded-2xl">
        <h1 className="mt-5 text-6xl font-black bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-transparent bg-clip-text">
          Our Services
        </h1>
        <div className="w-[100%] flex gap-8 p-20">
          <div className="w-[50%] flex flex-col gap-14 mt-10">
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
          <div className="w-[50%] flex flex-col gap-14 mt-10">
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
      <section className="mt-32 w-full h-full bg-white/12 flex  flex-col justify-center items-center p-5 rounded-2xl">
        <Services
          hclass="text-4xl"
          title="Strategic Marketing"
          description="Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!"
        />
        <DotLottieReact
          src="https://lottie.host/970516f8-4b20-43a2-bb13-463a31038eac/o8xSG5wmbK.lottie"
          loop
          autoplay
        />
      </section>
    </main>
  );
}
