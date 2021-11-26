import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
// import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import { useEffect, useRef } from "react";
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
    <div div className="w-11/12 mx-auto">
      <Head>
        <title>Kasih Cyber - IT Solution</title>
        <meta
          name="description"
          content="Kasih Cyber adalah Perusahaan Solusi IT Terbaik di Indonesia Timur"
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
      <SectionTitle pretitle="Testimoni" title="Apa yang client kami katakan:">
        {/* Berikut ini adalah komentar testimoni dari orang-orang yang sudah
        memakai jasa dan produk{" "}
        <span className="font-semibold">Kasih Cyber </span> sebagai solusi
        bisnis mereka. */}
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      <Cta />
      <Footer />
      {/* <PopupWidget /> */}
    </div>
  );
}
