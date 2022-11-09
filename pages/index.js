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
import Vue from "../public/tech/29.png";
import MongoDB from "../public/tech/33.png";
import Db from "../public/tech/34.png";
import Kotlin from "../public/tech/35.png";
import Swift from "../public/tech/36.png";
import Mysql from "../public/tech/31.png";
import Elephant from "../public/tech/32.png";
import Web3 from "../public/tech/37.png";
import Aws from "../public/tech/38.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>PT Salamun Teknologi Indonesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
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
        </section>
        {/* Tutup Intro */}

        {/* Service */}
        <section id="service">
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
                  <div className="text-xl text-blue-300 mb-2">
                    Managed Server
                  </div>
                  <p className="text-xs md:text-base">
                    We can manage your domain and application servers from
                    registration, renewal, configuration settings and other
                    related matters including integrating software into
                    business.
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
                    Is there a technology-based product that you want to
                    develop? Trust us to develop it with an end-to-end solution
                    from the design process to its implementation.
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
                    Likewise with mobile-based applications that will help
                    improve your company's image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tutup Service */}

        {/* Teams */}
        <section>
          <div id="teams">
            <div className="text-center">
              <h1 className="md:text-3xl text-sm pt-[8rem] font-semibold text-blue-300">
                We Are Proud of Our Team
              </h1>
              <br />
              <p className="text-sm md:text-base text-gray-600 font-semibold">
                Just sit back and relax while we take care of <br /> your
                business needs for you.
              </p>
              <br />
              <br />

              <div className=" xl:mx-52 md:mx-24">
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-0 flex justify-items-center">
                  <div className="w-[106px] h-[165px] lg:w-[200px] lg:h-[330px] rounded overflow-hidden shadow3">
                    <Image
                      className=" w-[87px] lg:w-[164px] mx-auto my-[6px] lg:my-3"
                      src={Team}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-1 py-1 lg:px-6 lg:py-4">
                      <div className="font-bold text-[12px] lg:text-xl lg:mb-2">
                        Faerul Salamun
                      </div>
                      <h1 className="text-gray-400 text-sm font-semibold lg:text-base">
                        CEO
                      </h1>
                      <div className="px-5 pt-1 lg:px-6 lg:pt-3 gap-x-2 flex pb-2">
                        <a href="">
                          <Image
                            className="w-[15px] md:w-[30px]"
                            src={Linkedin}
                            alt=""
                          />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
                          <Image src={Github} alt="" />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
                          <Image src={Youtube} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-[106px] h-[165px] lg:w-[200px] lg:h-[330px] rounded overflow-hidden shadow3">
                    <Image
                      className=" w-[87px] lg:w-[164px] mx-auto my-[6px] lg:my-3"
                      src={Team}
                      alt=""
                    />
                    <div className="px-1 py-1 lg:px-6 lg:py-4">
                      <div className="font-bold text-[12px] lg:text-xl lg:mb-2">
                        Faerul Salamun
                      </div>
                      <h1 className="text-gray-400 text-sm font-semibold lg:text-base">
                        CEO
                      </h1>
                      <div className="px-5 pt-1 lg:px-6 lg:pt-3 gap-x-2 flex pb-2">
                        <a href="">
                          <Image
                            className="w-[15px] md:w-[30px]"
                            src={Linkedin}
                            alt=""
                          />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
                          <Image src={Github} alt="" />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
                          <Image src={Youtube} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-[106px] h-[165px] lg:w-[200px] lg:h-[330px] mt-8 md:mt-0 rounded overflow-hidden shadow3">
                    <Image
                      className=" w-[87px] lg:w-[164px] mx-auto my-[6px] lg:my-3"
                      src={Team}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-1 py-1 lg:px-6 lg:py-4">
                      <div className="font-bold text-[12px] lg:text-xl lg:mb-2">
                        Faerul Salamun
                      </div>
                      <h1 className="text-gray-400 text-sm font-semibold lg:text-base">
                        CEO
                      </h1>
                      <div className="px-5 pt-1 lg:px-6 lg:pt-3 gap-x-2 flex pb-2">
                        <a href="">
                          <Image
                            className="w-[15px] md:w-[30px]"
                            src={Linkedin}
                            alt=""
                          />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
                          <Image src={Github} alt="" />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
                          <Image src={Youtube} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-[106px] h-[165px] lg:w-[200px] lg:h-[330px] mt-8 md:mt-0 rounded overflow-hidden shadow3">
                    <Image
                      className=" w-[87px] lg:w-[164px] mx-auto my-[6px] lg:my-3"
                      src={Team}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-1 py-1 lg:px-6 lg:py-4">
                      <div className="font-bold text-[12px] lg:text-xl lg:mb-2">
                        Faerul Salamun
                      </div>
                      <h1 className="text-gray-400 text-sm font-semibold lg:text-base">
                        CEO
                      </h1>
                      <div className="px-5 pt-1 lg:px-6 lg:pt-3 gap-x-2 flex pb-2">
                        <a href="">
                          <Image
                            className="w-[15px] md:w-[30px]"
                            src={Linkedin}
                            alt=""
                          />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
                          <Image src={Github} alt="" />
                        </a>
                        <a href="" className="w-[15px] md:w-[30px]">
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
          </div>
        </section>
        {/* Tutup Teams */}

        {/* Tech */}
        <section>
          <div id="techstack">
            <h1 className=" uppercase text-center text-sm md:text-xl lg:text-3xl mb-6 pt-[8rem] font-bold text-blue-300">
              Tech Stack
            </h1>
            <div className="grid grid-flow-col auto-cols-max items-center justify-center gap-x-[11px]">
              <div>
                <Image
                  className="w-[63px] md:w-[103px] lg:w-full h-auto"
                  src={Php}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[63px] md:w-[103px] lg:w-full h-auto"
                  src={Node}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[50px] md:w-[90px] lg:w-full h-auto"
                  src={Go}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[35px] md:w-[75px] lg:w-full h-auto"
                  src={Reactjs}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[22px] md:w-[62px] lg:w-full h-auto"
                  src={Vue}
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max items-center justify-center gap-x-[11px] md:gap-x-11">
              <div>
                <Image
                  className="w-[63px] md:w-[103px] lg:w-full h-auto"
                  src={MongoDB}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[32px] md:w-[52px] lg:w-full h-auto"
                  src={Db}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[62px] md:w-[82px] lg:w-full h-auto"
                  src={Kotlin}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[62px] md:w-[82px] lg:w-full h-auto"
                  src={Swift}
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max items-center justify-center gap-x-[4px] md:gap-x-10">
              <div>
                <Image
                  className="w-[62px] md:w-[82px] lg:w-full h-auto"
                  src={Mysql}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[62px] md:w-[82px] lg:w-full h-auto"
                  src={Elephant}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[63px] md:w-[83px] lg:w-full h-auto"
                  src={Web3}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="w-[38px] lg:w-full h-auto ml-7"
                  src={Aws}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* Tutup Tech */}

        {/* Maps */}
        <section className="mt-28 ">
          <div className="pt-[13px] pb-[13px] px-[10px] md:px-9 md:pt-[19px] lg:pt-10 lg:pb-10 lg:px-10 shadow3 lg:w-[861px] mx-auto">
            <div className="w-auto h-auto mx-auto md:w-[700px] md:h-[330px]">
              <iframe
                className="w-auto h-auto md:h-[328px] md:w-[678px] mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.498424594971!2d107.64474461546196!3d-6.95038076997705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd950cc15259%3A0xf5a14138db1906d6!2sPT%20Salamun%20Teknologi%20Indonesia!5e0!3m2!1sid!2sid!4v1664611387561!5m2!1sid!2sid"
              ></iframe>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
        {/* Tutup Maps */}

        {/* Outro */}
        <Outro />
        {/* Tutup Outro */}

        {/* Footer */}
        <footer className="text-center lg:text-left bg-[#38B8FF] mt-[87px]">
          <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
            <div className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="flex justify-center">
              <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="w-2.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  className="w-3.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-3.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  className="w-3.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-8">
              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                  <img src="/logo_salamun.png" alt="" />
                </h6>
                <p>
                  We are IT Solutions company from Bandung, Indonesia. We
                  design, create, and develop a variety of software and in all
                  matters relating to the application of Information and
                  Communication Technology.
                </p>
              </div>

              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  Contact
                </h6>
                <p className="flex items-center justify-center md:justify-start mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  <p className="">
                    Jl. Kiara Sari Permai XI No. 34, Buahbatu, Kota Bandung,
                    Jawa Barat, Indonesia
                  </p>
                </p>
                <p className="flex items-center justify-center md:justify-start mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                  support@salamunteknologi.com
                </p>
                <p className="flex items-center justify-center md:justify-start mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                  <p>
                    +62 22 87307674 (Calls Only) <br />
                    +62 813 202 916 40 (Calls & WA)
                  </p>
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* Tutup Footer */}
      </main>
    </>
  );
}
