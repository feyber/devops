import {
  WifiIcon,
  ShareIcon,
  VideoCameraIcon,
  DeviceMobileIcon,
  ArrowCircleDownIcon,
  CalculatorIcon,
  MoonIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-onea.png";
import benefitTwoImg from "../public/img/webdev.png";

const benefitOne = {
  title: "Solusi Belanja dari HP",
  desc: "Kini transaksi belanja ada ditangan anda. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Harga Termurah",
      desc: "Jaminan uang kembali apabila harga kami lebih mahal.",
      icon: <MoonIcon />,
    },
    {
      title: "Jaringan Toko Luas",
      desc: "Solusi belanja sampai ke pelosok Nusantara.",
      icon: <ShareIcon />,
    },
    {
      title: "Verifikasi Mudah",
      desc: "Dengan teknologi terkini. tinggal foto memakai smartphone.",
      icon: <VideoCameraIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mendukung Website dan Aplikasi Mobile",
  desc: "Design kami mengadopsi konsep simple-minimalist yang mengikuti tren design secara global.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Website dengan Mobile Responsive",
      desc: "Dengan smartphone anda bisa menjangkau pembeli yang luas.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Download",
      desc: "Download app kami sekarang dan dapatkan Untuk berlipat kali ganda.",
      icon: <ArrowCircleDownIcon />,
    },
    {
      title: "Kalkulator Belanja",
      desc: "Hanya tersedia saat pembelian online",
      icon: <CalculatorIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
