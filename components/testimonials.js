import Image from "next/image";
import React from "react";
import Container from "./container";
import Tilt from "react-parallax-tilt";
import userOneImg from "../public/img/iska.png";
import userTwoImg from "../public/img/forklift.png";
import userThreeImg from "../public/img/pasar.jpg";
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
    <Tilt tiltReverse={true} tiltAxis={"x"}>
      <Container>
        <div
          id="testimoni"
          className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mb-10 js-show-on-scroll"
        >
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-yellow-400 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                <Mark>Sangat baik</Mark>
                dan memuaskan. Website ecommerce saya bekerja dengan lancar.
              </p>

              <Avatar
                image={userOneImg}
                name="Iska Vonalia"
                title="co-founder OSA Gift"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-yellow-400 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Sejak membuat website <Mark>Landing Page</Mark>
                dari 2018, penjualan secara online meningkat.
              </p>

              <Avatar
                image={userTwoImg}
                name="Toni Prasetyo"
                title="Sales Forklift Mitsubishi"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-yellow-400 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                Pengerjaan <Mark>CCTV</Mark> rapi dan kualitas video sangat
                baik.
              </p>

              <Avatar
                image={userThreeImg}
                name="Staff Purchasing"
                title="Pasar Modern Tobelo"
              />
            </div>
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
