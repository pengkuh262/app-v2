import Image from "next/image";
import Salamun from "/public/logo_salamun.png";
import Insta from "/public/icon/ico-insta.svg";

const Footer = () => {
  return (
    <>
      <footer class="bg-white text-center mt-28 border-t-2">
        <div class="container p-6 text-gray-800">
          <div class="mb-6 md:mb-0 px-10 md:px-[70px] lg:px-80">
            <Image className="mx-auto" src={Salamun} />

            <p className="mb-4 mt-3 font-semibold">
              “ We are IT Solutions company from Bandung, Indonesia. We design,
              create, and develop a variety of software and in all matters
              relating to the application of Information and Communication
              Technology. “
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center gap-4 text-gray-700 p-4">
          <a class="text-gray-500" href="">
            © 2022 Copyright
            <span> PT Salamun Teknologi Indonesia.</span>
          </a>
          <a href="">
            <Image className="" src={Insta} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
