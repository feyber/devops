import {
  WifiIcon,
  ShareIcon,
  VideoCameraIcon,
  DeviceMobileIcon,
  ArrowCircleDownIcon,
  CalculatorIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/infrastruktur.svg";
import benefitTwoImg from "../public/img/webdev.svg";

const benefitOne = {
  title: "Solusi Infrastruktur Jaringan",
  desc: "Tim kami terdiri dari orang yang handal dalam berbagai macam bidang IT dan juga berdedikasi tinggi untuk memberikan solusi terbaik untuk kegiatan bisnis anda.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Jaringan Komputer",
      desc: "Perencanaan, pemasangan dan pemeliharaan jaringan Komputer (LAN, WLAN & WAN).",
      icon: <WifiIcon />,
    },
    {
      title: "Internet Satelit",
      desc: "Solusi internet sampai ke pelosok Nusantara.",
      icon: <ShareIcon />,
    },
    {
      title: "CCTV",
      desc: "Perencanaan, pemasangan dan pemeliharaan jaringan CCTV (Analog, IP Camera).",
      icon: <VideoCameraIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Pembuatan Website dan Aplikasi Mobile",
  desc: "Dalam mengerjakan proyek secara kreatif & profesional, kami mengadopsi konsep simple-minimalist yang mengikuti tren design secara global.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Website dengan Mobile Responsive",
      desc: "Kami menggunakan Wordpress, ReactJS, NextJS, Tailwind, Bootstrap dalam mengerjakan proyek client.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "PWA",
      desc: "Progresive Web APP adalah teknologi google yang memungkinkan pengguna website menginstall website ke smartphone mereka.",
      icon: <ArrowCircleDownIcon />,
    },
    {
      title: "React Native",
      desc: "Pengerjaan aplikasi mobile untuk android dan ios.",
      icon: <CalculatorIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
