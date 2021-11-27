import Image from "next/image";
import React from "react";
import Container from "./container";
import Tilt from "react-parallax-tilt";
import userOneImg from "../public/img/user1.jpg";
// import userTwoImg from "../public/img/user2.jpg";
// import userThreeImg from "../public/img/user3.jpg";
import { useEffect, useRef } from "react";

export default function Testimonials() {
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
    <Tilt tiltReverse={true}>
      <Container>
        <div id="testimoni" className="mb-10 js-show-on-scroll">
          <div className="">
            <div className="flex flex-col justify-between w-full bg-yellow-400 px-8 rounded-2xl py-6 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal text-center p-8 font-semibold">
                Layanan pelanggan <Mark>sangat baik</Mark>
                dan memuaskan. Tampilan App keren!
              </p>

              {/* <Avatar
                image={userOneImg}
                name="Woman1"
                title="co-founder MoonCraft"
              /> */}
            </div>
          </div>
          <div className="">
            {/* <div className="flex flex-col justify-between w-full h-full bg-yellow-400 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Sejak memakai app <Mark>UntungTerus</Mark>
                penjualan secara online meningkat.
              </p>

              <Avatar
                image={userTwoImg}
                name="Paul Budi"
                title="Sales Manager"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-yellow-400 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Pembayaran <Mark>Belanja</Mark> sangat mudah dilakukan
                darimanapun.
              </p>

              <Avatar
                image={userThreeImg}
                name="Staff Purchasing"
                title="Pasar Modern"
              />
            </div> */}
          </div>
        </div>
      </Container>
    </Tilt>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
