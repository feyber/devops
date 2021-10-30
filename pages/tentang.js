import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import maluku from "../public/img/maluku.png";

export default function Tentang() {
  return (
    <div className="mx-auto w-11/12">
      <Head>
        <title>Tentang Kasih Cyber</title>
        <meta
          name="description"
          content="Kasih Cyber adalah Perusahaan Solusi IT Terbaik di Indonesia Timur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-center items-center">
        <h1 className="p-5 lg:p-20 font-bold text-indigo-600 text-3xl md:text-4xl lg:text-6xl hover:scale-110 duration-700">
          Tentang Kami
        </h1>
      </div>
      <div className="mt-8">
        <p className="py-4 px-8 text-sm md:text-lg font-semibold lg:p-20 lg:px-20 text-justify bg-yellow-300 rounded-lg hover:shadow-xl dark:text-gray-900 scale-100 hover:scale-95 duration-700">
          CV. Kasih Cyber merupakan Startup putera daerah yang bergerak dalam
          bidang jasa Teknologi Informasi yang mengutamakan layanan serta solusi
          terbaik bagi calon pelanggan dan client yang membutuhkan layanan prima
          dari kami. Perusahaan kami melayani seluruh client dari Indonesia
          Timur (Maluku Utara, Maluku dan Papua) dan Nusantara.
        </p>
      </div>
      <div className=" relative mt-8 scale-100 hover:scale-95 duration-700">
        <p className=" relative py-8 md:py-4 px-8 text-sm md:text-lg font-semibold lg:p-20 lg:px-20 text-justify bg-yellow-300 rounded-lg hover:shadow-xl dark:text-gray-900 ">
          Visi CV. Kasih Cyber adalah kami ingin bermanfaat bagi masyarakat
          dengan menyebarkan Kasih kepada semua orang dan mengadopsi teknologi
          terkini guna pemerataan ekonomi khususnya di Indonesia Timur (Maluku
          Utara, Maluku dan Papua).
        </p>
        <div className="absolute top-0 font-bold bg-indigo-600 ml-4 -mt-4 px-4 py-2 text-indigo-50 rounded-lg text-sm md:text-base">
          VISI
        </div>
      </div>
      <div className="relative flex items-center justify-center p-10 mt-4">
        <Image
          src={maluku}
          width="1300"
          height="500"
          alt=""
          className="rounded-xl shadow min-w-max"
        />
        <h1 className="absolute top-12 font-bold">INDONESIA TIMUR</h1>
      </div>

      <Footer />
    </div>
  );
}
