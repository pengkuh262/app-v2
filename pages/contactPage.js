import Head from "next/head";
import React from "react";
import Footer from "../pages/components/footer";
import NavbarIndex from "./components/navbarIndex";

const contactPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavbarIndex />
      <div className="mt-32 px-8">
        <h1 className="text-center text-2xl font-bold">Drop Us Line</h1>
        <p className="text-center text-gray-500">
          Reach out to us from our contact form and we will get back to you
          shortly.
        </p>
        <form class="w-full mt-8 mx-auto max-w-sm md:max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Your Name *"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Email *"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Phone Number *"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Companny *"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 ">
              <textarea
                class="appearance-none block w-full h-[150px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="Message *"
              />
            </div>
          </div>
          <div class="text-xs text-center font-bold">
            This site is protected by reCAPTCHA and the Google
            <a
              className="text-blue-500"
              href="https://policies.google.com/privacy"
            >
              <span> Privacy Policy </span>
            </a>
            and
            <a
              className="text-blue-500"
              href="https://policies.google.com/terms"
            >
              <span> Terms of Service </span>
            </a>
            apply.
          </div>
          <div class="col-12 mt-4 text-center">
            <button className="transition ease-in-out delay-150  bg-[#38b8ff] hover:-translate-y-1 hover:scale-110 hover:bg-[#38b8ff]-500 duration-200 bg-[#38b8ff] font-mulish text-white text-sm py-[8.43px] px-[24.78px] mt-2 md:mt-3 md:py-3 md:px-10 md:text-xl l lg:py-[15px] lg:px-[42px] lg:text-2xl rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default contactPage;
