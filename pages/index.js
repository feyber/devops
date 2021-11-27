import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";
import { benefitOne, benefitTwo } from "../components/data";
// import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import infrastructure from "../public/img/infra.svg";
import pengadaan from "../public/img/pengadaan.svg";
import support from "../public/img/support.svg";
import awan from "../public/img/Cloud.png";
import elemen from "../public/img/Diagram.png";
//import Faq from "../components/faq";
// import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));
// Get all the elements you want to show on scroll

export default function Home() {
  let observer = useRef();

  useEffect(() => {
    observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
  }, []);

  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  };
  return (
    <>
      <div div className="w-11/12 mx-auto">
        <Head>
          <title>Untung Terus - SuperApps</title>
          <meta
            name="description"
            content="Untung Terus adalah Perusahaan Solusi Pembayaran Terbaik di Indonesia"
          />
          <link rel="icon" href="/favicon.ico" />
          <script
            data-ad-client="ca-pub-3895410812001823"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>

        <Navbar />
        <Hero />
        <Testimonials />
        <SectionTitle pretitle="" title="Solusi Tepat Untuk Hasil Terbaik.">
          {/* Tim kami terdiri dari orang yang handal dalam berbagai macam bidang IT
        dan juga berdedikasi tinggi untuk memberikan solusi terbaik untuk
        kegiatan bisnis anda. */}
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle> */}
        {/* <Video /> */}
        <SectionTitle
          pretitle="Testimoni"
          title="Apa yang client kami katakan:"
        >
          {/* Berikut ini adalah komentar testimoni dari orang-orang yang sudah
        memakai jasa dan produk{" "}
        <span className="font-semibold">Kasih Cyber </span> sebagai solusi
        bisnis mereka. */}
        </SectionTitle>
        <Container>
          <div className="flex flex-col justify-center w-full mt-20 lg:mt-20">
            {/* <div className="text-xl text-center text-gray-700 dark:text-white -mt-12 mb-44 bg-indigo-600 rounded-xl">
            <h1>Service Kami</h1>
             <span className="text-indigo-600">2000+</span> customers
            worldwide 
          </div> */}

            <Tilt tiltReverse={true} tiltAxis={"y"}>
              <div
                id="service"
                className="flex flex-col sm:flex-row sm:w-full items-center justify-around space-x-4 -mt-24 js-show-on-scroll"
              >
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-64 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                  <Image
                    src={pengadaan}
                    width="150"
                    height="150"
                    alt=""
                    className="items-center justify-center"
                  />
                  <h1 className=" text-center text-md font-bold">
                    +/- 100.000{" "}
                    <span className="text-indigo-600 dark:text-indigo-500">
                      TRANSAKSI
                    </span>
                  </h1>
                </div>

                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-64 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700 ">
                  <Image
                    src={infrastructure}
                    width="200"
                    height="200"
                    alt=""
                    className="items-center justify-center"
                  />
                  <h1 className=" text-center text-md font-bold ">
                    FITUR APLIKASI{" "}
                    <span className="text-indigo-600 dark:text-indigo-500">
                      MELIMPAH
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-64 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                  <Image
                    src={elemen}
                    width="180"
                    height="150"
                    alt=""
                    className="items-center justify-center"
                  />
                  <h1 className=" text-center text-md font-bold">
                    LAPORAN KEUANGAN{" "}
                    <span className="text-indigo-600 dark:text-indigo-500 mt-2">
                      LENGKAP
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-64 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                  <Image
                    src={awan}
                    width="180"
                    height="150"
                    alt=""
                    className="items-center justify-center"
                  />
                  <h1 className=" text-center text-md font-bold">
                    CLOUD{" "}
                    <span className="text-indigo-600 dark:text-indigo-500 mt-2">
                      INFRASTRUCTURE
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-64 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                  <Image
                    src={support}
                    width="180"
                    height="150"
                    alt=""
                    className="items-center justify-center"
                  />
                  <h1 className=" text-center text-md font-bold">
                    24/7 BANTUAN{" "}
                    <span className="text-indigo-600 dark:text-indigo-500 mt-2">
                      PROFESIONAL
                    </span>
                  </h1>
                </div>
              </div>
            </Tilt>
            {/* <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div> */}
          </div>
        </Container>
        {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
        {/* <Faq /> */}
        <Cta />
        <Footer />
        {/* <PopupWidget /> */}
      </div>
    </>
  );
}
