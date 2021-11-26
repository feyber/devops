// import Head from "next/head";
// import Footer from "../components/footer";
// import Navbar from "../components/navbar";
// import Image from "next/image";
// import maluku from "../public/img/maluku.png";
// import cctv from "../public/img/cctv.png";
// import wifi from "../public/img/wifi.png";
// import website from "../public/img/website.png";

// export default function Tentang() {
//   return (
//     <div className="mx-auto w-11/12">
//       <Head>
//         <title>Tentang Kasih Cyber</title>
//         <meta
//           name="description"
//           content="Kasih Cyber adalah Perusahaan Solusi IT Terbaik di Indonesia Timur"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />
//       <div className="flex justify-center items-center">
//         <h1 className="p-5 lg:p-20 font-bold text-indigo-600 text-3xl md:text-4xl lg:text-6xl hover:scale-110 duration-700">
//           Tentang Kami
//         </h1>
//       </div>
//       <div className="mt-8">
//         <p className="py-4 px-8 text-sm md:text-lg font-semibold lg:p-20 lg:px-20 text-justify bg-yellow-300 rounded-lg hover:shadow-xl dark:text-gray-900 scale-100 hover:scale-95 duration-700">
//           CV. Kasih Cyber merupakan Startup putera daerah yang bergerak dalam
//           bidang jasa Teknologi Informasi yang mengutamakan layanan serta solusi
//           terbaik bagi calon pelanggan dan client yang membutuhkan layanan prima
//           dari kami. Perusahaan kami melayani seluruh client dari Indonesia
//           Timur (Maluku Utara, Maluku dan Papua) dan Nusantara.
//         </p>
//       </div>
//       <div className=" relative mt-8 scale-100 hover:scale-95 duration-700">
//         <p className=" relative py-8 md:py-4 px-8 text-sm md:text-lg font-semibold lg:p-20 lg:px-20 text-justify bg-yellow-300 rounded-lg hover:shadow-xl dark:text-gray-900 ">
//           Visi CV. Kasih Cyber adalah kami ingin bermanfaat bagi masyarakat
//           dengan menyebarkan Kasih kepada semua orang dan mengadopsi teknologi
//           terkini guna pemerataan ekonomi khususnya di Indonesia Timur (Maluku
//           Utara, Maluku dan Papua).
//         </p>
//         <div className="absolute top-0 font-bold bg-indigo-600 ml-4 -mt-4 px-4 py-2 text-indigo-50 rounded-lg text-sm md:text-base">
//           VISI
//         </div>
//       </div>
//       <section className=" hover:shadow-xl duration-700 hover:scale-95 relative mt-10 p-10 mx-auto lg:p-20 flex justify-center items-center rounded-xl bg-red-500  ">
//         {/* <!-- rotate --> */}
//         <div className="absolute shadow-lg top-0 font-bold bg-indigo-600 ml-4 -mt-4 px-4 py-2 text-indigo-50 rounded-lg text-sm md:text-base">
//           CLIENT KAMI
//         </div>
//         <div className="dark:text-gray-900 md:grid-cols-3 md:grid-rows-2 gap-2 lg:gap-4 grid lg:grid-rows-2 lg:grid-cols-6 grid-rows-6 grid-cols-2">
//           <div className="h-28 w-28 relative cursor-pointer mb-5 ">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={cctv}
//                   width="70"
//                   height="70"
//                   alt="CCTV RSUD Tobelo"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">RSUD TOBELO</h1>
//               </div>
//             </div>
//           </div>

//           {/* <!-- rotate minus --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <div className=" h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                   <Image
//                     src={cctv}
//                     width="70"
//                     height="70"
//                     alt="CCTV SMS Finance Tobelo"
//                   />
//                   <h1 className="text-xs mt-1 font-semibold">SMS FINANCE</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- rotate --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                   <Image
//                     src={cctv}
//                     width="70"
//                     height="70"
//                     alt="CCTV Pasar Modern Tobelo"
//                   />
//                   <h1 className="text-xs mt-1 font-semibold">PASAR MODERN</h1>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <!-- rotate minus --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                   <Image
//                     src={wifi}
//                     width="70"
//                     height="70"
//                     alt="LAN Universitas Hein Namotemo Tobelo"
//                   />
//                   <h1 className="text-xs mt-1 font-semibold">UNHENA</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- rotate --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={wifi}
//                   width="70"
//                   height="70"
//                   alt="Wifi Hotspot Hotel Bianda Tobelo"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">HOTEL BIANDA</h1>
//               </div>
//             </div>
//           </div>

//           {/* <!-- rotate minus --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={wifi}
//                   width="70"
//                   height="70"
//                   alt="Wifi Hotspot Hotel Bryken Tobelo"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">HOTEL BRYKEN</h1>
//               </div>
//             </div>
//           </div>
//           {/* <!-- rotate --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={wifi}
//                   width="70"
//                   height="70"
//                   alt="Wifi Hotspot Badan Kepegawaian Halmahera Utara Tobelo"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">BAPPEDA HALUT</h1>
//               </div>
//             </div>
//           </div>

//           {/* <!-- rotate minus --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={wifi}
//                   width="70"
//                   height="70"
//                   alt="Wifi Hotspot Dinas Kependudukan dan Catatan Sipil Halmahera Utara Tobelo"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">DUKCAPIL HALUT</h1>
//               </div>
//             </div>
//           </div>
//           {/* <!-- rotate --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={wifi}
//                   width="70"
//                   height="70"
//                   alt="Wifi Hotspot Zhafira House Tobelo"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">ZHAFIRA HOUSE</h1>
//               </div>
//             </div>
//           </div>

//           {/* <!-- rotate minus --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={website}
//                   width="70"
//                   height="70"
//                   alt="Website Wordpress OSA Gift Store Jakarta"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">OSA GIFT</h1>
//               </div>
//             </div>
//           </div>
//           {/* <!-- rotate --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={website}
//                   width="70"
//                   height="70"
//                   alt="Website Landing Page BYD Forklift Jakarta"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">BYD FORKLIFT</h1>
//               </div>
//             </div>
//           </div>

//           {/* <!-- rotate minus --> */}
//           <div className="h-28 w-28 relative cursor-pointer mb-5">
//             <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//             <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
//               <div className="h-full w-full flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl">
//                 <Image
//                   src={website}
//                   width="70"
//                   height="70"
//                   alt="Website Landing Page NOBU88 Games Jakarta"
//                 />
//                 <h1 className="text-xs mt-1 font-semibold">NOBUGAMES</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="relative w-full flex items-center justify-center p-10 mt-4">
//         <Image
//           src={maluku}
//           width="1300"
//           height="500"
//           alt=""
//           className="rounded-xl shadow min-w-max"
//         />
//         <h1 className="absolute top-12 font-bold">INDONESIA TIMUR</h1>
//       </div>

//       {/* <!-- Origin -->
//         <div className="h-28 w-28 relative cursor-pointer mb-5">
//           <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//           <div className="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
//             <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
//           </div>
//         </div>

//         {/* <!-- translate --> */}
//       {/* <div className="h-28 w-32 relative cursor-pointer mb-5">
//           <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//           <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
//             <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
//           </div>
//         </div> */}

//       {/* <div className="h-32 w-32 relative cursor-pointer mb-5">
//           <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>

//           <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
//             <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
//           </div>
//         </div> */}

//       {/* <!-- skew --> */}
//       {/* <div className="h-32 w-32 relative cursor-pointer mb-5">
//           <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
//           <div className="absolute inset-0 transform hover:skew-y-12 transition duration-300">
//             <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
//           </div>
//         </div> */}

//       <Footer />
//     </div>
//   );
// }
