import Head from "next/head";
import ContactUs from "./components/contactUs";
import NavbarIndex from "./components/navbarIndex";
import Outro from "./components/outro";
import Image from "next/image";
import Webdev from "../public/i24.png";
import Server from "../public/i23.png";
import Desktop from "../public/i22.png";
import Mobile from "../public/i26.png";
import Team from "../public/kangFaerul.png";
import Linkedin from "../public/icon/ico-linkedin.svg";
import Github from "../public/icon/ico-github.svg";
import Youtube from "../public/icon/ico-youtube.svg";
import Php from "../public/tech/26.png";
import Node from "../public/tech/27.png";
import Go from "../public/tech/28.png";
import Reactjs from "../public/tech/29.png";
import Vue from "../public/tech/30.png";
import MongoDB from "../public/tech/33.png";
import Db from "../public/tech/34.png";
import Kotlin from "../public/tech/35.png";
import Swift from "../public/tech/36.png";
import Mysql from "../public/tech/31.png";
import Elephant from "../public/tech/32.png";
import Web3 from "../public/tech/37.png";
import Aws from "../public/tech/38.png";
import Footer from "../pages/components/footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>PT Salamun Teknologi Indonesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {/* Navbar */}
      <NavbarIndex />
      {/* Tutup Navbar */}

      {/* Intro */}
      <section id="intro" className="mt-[125px] md:mt-[183px] mx-auto">
        <div>
          <h1 className="ml-8 text-xl tracking-wider md:text-3xl md:tracking-wide md:ml-10 md:mt-[-25px] md:ml-28 lg:ml-[139px] md:tracking-widest lg:mt-0 lg:leading-[50px] lg:text-4xl font-semibold">
            A Software House <br />
            Specializing in Application <br />
            Development
          </h1>
          <div className=" flex">
            <ContactUs />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      {/* Tutup Intro */}

      {/* Service */}
      <section className="pb-16" id="service">
        <h1 className=" text-3xl pt-[8rem] text-blue-300 text-center">
          What We Do?
        </h1>
        <p className=" text-gray-50 pt-3 text-center">
          The service we offer is specifically <br /> designed to meet your
          <br />
          requirements.
        </p>
        <div className="bg-transparent grid grid-rows-4 md:grid-rows-4 lg:grid-rows-4 xl:grid-rows-2 mt-28 grid-flow-col">
          <div className="bg-transparent overflow-hidden mx-auto md:mx-auto lg:mx-auto xl:ml-36 text-gray-50 xl:mt-[-4rem]">
            <Image
              className=" mb-[-5rem] w-24 ml-10 md:w-48 md:ml-[5rem] md:mb-[-6rem]"
              src={Webdev}
              alt="webdev"
            />
            <div className=" shadow2 px-3 py-2 m-12 w-[212px] mb-[14px] mr-2 md:px-6 md:py-4 bg-biru md:ml-24 md:w-[424px] md:mb-7 md:mr-4 rounded-2xl">
              <div className=" mt-8 pl-8 md:mt-24 md:pl-16">
                <div className="text-xl text-blue-300 mb-2">
                  Web Development
                </div>
                <p className="text-xs md:text-base">
                  We help you to Develop application for your business, both
                  vertical (industry specific) and horizontal (serve a
                  particular need across all organizations and industries).
                </p>
              </div>
            </div>
          </div>
          <div className="bg-transparent overflow-hidden mx-auto md:mx-auto lg:mx-auto xl:ml-36 text-gray-50 xl:mt-[-4rem]">
            <Image
              className="mb-[-5rem] w-24 ml-10 md:mb-[-6rem] md:w-48 md:ml-[5rem]"
              src={Server}
              alt="webdev"
            />
            <div className=" shadow2 px-3 py-2 m-12 w-[212px] mb-[14px] mr-2 md:px-6 md:py-4 bg-biru md:ml-24 md:w-[424px] md:mb-7 md:mr-4 rounded-2xl">
              <div className="mt-8 pl-8 md:mt-24 md:pl-16">
                <div className="text-xl text-blue-300 mb-2">Managed Server</div>
                <p className="text-xs md:text-base">
                  We can manage your domain and application servers from
                  registration, renewal, configuration settings and other
                  related matters including integrating software into business.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-transparent overflow-hidden mx-auto md:mx-auto lg:mx-auto xl:mr-36 text-gray-50 xl:mt-[-4rem] xl:mt-24">
            <Image
              className="mb-[-5rem] w-24 ml-10 md:mb-[-6rem] md:w-48 md:ml-[5rem]"
              src={Desktop}
              alt="webdev"
            />
            <div className=" shadow2 px-3 py-2 m-12 w-[212px] mb-[14px] mr-2 md:px-6 md:py-4 bg-biru md:ml-24 md:w-[424px] md:mb-7 md:mr-4 rounded-2xl">
              <div className=" mt-8 pl-8 md:mt-24 md:pl-16">
                <div className="text-xl text-blue-300 mb-2">
                  Desktop Development
                </div>
                <p className="text-xs md:text-base">
                  Is there a technology-based product that you want to develop?
                  Trust us to develop it with an end-to-end solution from the
                  design process to its implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-transparent overflow-hidden mx-auto md:mx-auto lg:mx-auto xl:mr-36 text-gray-50 xl:mt-[-4rem] xl:mt-24">
            <Image
              className="mb-[-5rem] w-24 ml-10 md:mb-[-6rem] md:w-48 md:ml-[5rem]"
              src={Mobile}
              alt="webdev"
            />
            <div className=" shadow2 px-3 py-2 m-12 w-[212px] mb-[14px] mr-2 md:px-6 md:py-4 bg-biru md:ml-24 md:w-[424px] md:mb-7 md:mr-4 rounded-2xl">
              <div className="mt-8 pl-8 md:mt-24 md:pl-16">
                <div className="text-xl text-blue-300 mb-2">
                  Mobile App Development
                </div>
                <p className="text-xs md:text-base">
                  In today's market, every company needs an effective website.
                  Likewise with mobile-based applications that will help improve
                  your company's image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tutup Service */}

      {/* Teams */}
      <section id="teams">
        <div className="text-center">
          <h1 className="md:text-3xl text-sm pt-[8rem] font-semibold text-blue-300">
            We Are Proud of Our Team
          </h1>
          <br />
          <p className="text-sm md:text-base text-gray-600 font-semibold">
            Just sit back and relax while we take care of <br /> your business
            needs for you.
          </p>
          <br />
          <br />

          <div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex justify-items-center">
              <div className="w-[250px] h-[250px] rounded overflow-hidden shadow3">
                <Image
                  className=" w-[110px] mx-auto mt-6 my-3"
                  src={Team}
                  alt="Sunset in the mountains"
                />
                <div className="">
                  <div className="font-bold text-lg mb-1">Faerul Salamun</div>
                  <h1 className="text-gray-400 font-semibold text-base">CEO</h1>
                  <div className="px-5 pt-1 gap-x-3 flex justify-center pb-2">
                    <a href="">
                      <Image className="w-[23px]" src={Linkedin} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Github} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Youtube} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-[250px] hidden md:inline rounded overflow-hidden shadow3">
                <Image
                  className=" w-[110px] mx-auto mt-6 my-3"
                  src={Team}
                  alt="Sunset in the mountains"
                />
                <div className="">
                  <div className="font-bold text-lg mb-1">Faerul Salamun</div>
                  <h1 className="text-gray-400 font-semibold text-base">CEO</h1>
                  <div className="px-5 pt-1 gap-x-3 flex justify-center pb-2">
                    <a href="">
                      <Image className="w-[23px]" src={Linkedin} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Github} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Youtube} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-[250px] hidden lg:inline rounded overflow-hidden shadow3">
                <Image
                  className=" w-[110px] mx-auto mt-6 my-3"
                  src={Team}
                  alt="Sunset in the mountains"
                />
                <div className="">
                  <div className="font-bold text-lg mb-1">Faerul Salamun</div>
                  <h1 className="text-gray-400 font-semibold text-base">CEO</h1>
                  <div className="px-5 pt-1 gap-x-3 flex justify-center pb-2">
                    <a href="">
                      <Image className="w-[23px]" src={Linkedin} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Github} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Youtube} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-[250px] hidden xl:inline rounded overflow-hidden shadow3">
                <Image
                  className=" w-[110px] mx-auto mt-6 my-3"
                  src={Team}
                  alt="Sunset in the mountains"
                />
                <div className="">
                  <div className="font-bold text-lg mb-1">Faerul Salamun</div>
                  <h1 className="text-gray-400 font-semibold text-base">CEO</h1>
                  <div className="px-5 pt-1 gap-x-3 flex justify-center pb-2">
                    <a href="">
                      <Image className="w-[23px]" src={Linkedin} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Github} alt="" />
                    </a>
                    <a href="" className="w-[23px]">
                      <Image src={Youtube} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
      {/* Tutup Teams */}

      {/* Tech */}
      <section>
        <div className="" id="techstack">
          <h1 className=" uppercase text-center text-sm md:text-xl lg:text-3xl mb-6 pt-[8rem] font-bold text-blue-300">
            Tech Stack
          </h1>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 items-center justify-items-center px-6 justify-center ">
          <div className="w-[65px] md:w-[135px] my-8">
            <Image src={Php} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8">
            <Image src={Node} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8">
            <Image src={Go} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8">
            <Image src={Reactjs} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8">
            <Image src={Vue} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8">
            <Image src={Mysql} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8 lg:col-span-1">
            <Image src={Db} alt="" />
          </div>

          <div className="w-[65px] md:w-[135px] my-8 lg:col-span-1 xl:col-span-1">
            <Image src={Kotlin} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8 lg:col-span-2 xl:col-span-2">
            <Image src={Swift} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8 lg:col-span-1 xl:col-span-1">
            <Image src={MongoDB} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8 lg:col-span-1 xl:col-span-1">
            <Image src={Elephant} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8 lg:col-span-3 xl:col-span-1">
            <Image src={Web3} alt="" />
          </div>
          <div className="w-[65px] md:w-[135px] my-8 col-span-4 lg:col-span-3 xl:col-span-1">
            <Image src={Aws} alt="" />
          </div>
        </div>
      </section>
      {/* Tutup Tech */}

      {/* Maps */}
      <section className="">
        <div className="container mx-auto pb-11 pt-10">
          <div className="px-8 container grid grid-cols-2 mb-16 ">
            <div className="flex w-[380px] md:w-full h-[400px] shadow-xl justify-center col-span-2 md:col-span-1 mx-auto ">
              <iframe
                className="w-full "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.498424594971!2d107.64474461546196!3d-6.95038076997705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd950cc15259%3A0xf5a14138db1906d6!2sPT%20Salamun%20Teknologi%20Indonesia!5e0!3m2!1sid!2sid!4v1664611387561!5m2!1sid!2sid"
              ></iframe>
            </div>
            <div class="flex w-[380px] md:w-full h-[400px] shadow-xl justify-center col-span-2 md:col-span-1 mx-auto items-center bg-gray-50">
              <div class="">
                <div class="flex">
                  <div className="mr-4">
                    <div class="flex text-[20px] text-blue-500 ">
                      <FaMapMarkerAlt />
                    </div>
                  </div>
                  <div class="align-self-start justify-content-start">
                    <h1 class="font-semibold">Address</h1>
                    <address className="text-sm mb-2">
                      Jl. Kiarasari Permai XI No. 34
                      <br />
                      Bandung, Jawa Barat
                    </address>
                  </div>
                </div>

                <div class="flex">
                  <div className="mr-4">
                    <div class="flex text-[20px] text-blue-500 ">
                      <FaPhoneAlt />
                    </div>
                  </div>
                  <div>
                    <h5 class="font-semibold">Phone</h5>
                    <p className="text-sm mb-2">
                      +62 22 87307674 (Calls Only)
                      <br />
                      +62 813 202 916 40 (Calls & WA)
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div className="mr-4">
                    <div class="flex text-[20px] text-blue-500 ">
                      <FaEnvelope />
                    </div>
                  </div>
                  <div>
                    <h5 class="font-semibold">E-mail</h5>
                    <p class="text-sm mb-2">
                      <a
                        href="mailto:support@salamunteknologi.com"
                        class="link-body"
                      >
                        support@salamunteknologi.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tutup Maps */}

      {/* Outro */}
      <Outro />
      {/* Tutup Outro */}

      {/* Footer */}
      <Footer />
      {/* Tutup Footer */}
    </>
  );
}
