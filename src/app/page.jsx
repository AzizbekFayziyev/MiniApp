"use client";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main className="max-w-[420px] mx-auto px-4 text-center text-white pt-4 py-10">
      <h1 data-aos="fade-in" className="text-8xl font-bold stroke-text">
        2 day
      </h1>
      <h2
        data-aos="fade-in"
        data-aos-delay="300"
        className="font-semibold mt-5"
      >
        guess the sphere of life and click on the ball
      </h2>

      <div className="mt-6 relative max-w-max mx-auto">
        <img
          data-aos="zoom-in"
          className="block mx-auto"
          width={200}
          src="/sphere.png"
          alt="hero image"
        />

        <img
          data-aos="fade-right"
          data-aos-delay="300"
          className="absolute z-10 bottom-[-10px] left-[-65px]"
          width={120}
          src="/arrow.png"
          alt="arrow"
        />
      </div>

      <h4 data-aos-delay="500" data-aos="fade-in" className="font-semibold mt-4">
        guess the sphere of life and click on the ball
      </h4>

      <div data-aos="zoom-in" className="flex justify-center mt-8 gap-4">
        <button className="bg-white rounded-full min-w-9 min-h-9 text-black grid place-content-center font-bold border-[4px] border-primary_green">
          1
        </button>
        <button className="bg-white rounded-full min-w-9 min-h-9 text-black grid place-content-center font-bold border-[4px] border-primary_green">
          2
        </button>
        <button className="bg-white rounded-full min-w-9 min-h-9 text-black grid place-content-center font-bold border-[4px] border-secondary">
          3
        </button>
        <button className="bg-white rounded-full min-w-9 min-h-9 text-black grid place-content-center font-bold border-[4px] border-secondary">
          4
        </button>
        <button className="bg-white rounded-full min-w-9 min-h-9 text-black grid place-content-center font-bold border-[4px] border-secondary">
          5
        </button>
        <button className="bg-white rounded-full min-w-9 min-h-9 text-black grid place-content-center font-bold border-[4px] border-secondary">
          6
        </button>
        <button className="bg-white rounded-full min-w-9 min-h-9 text-black grid place-content-center font-bold border-[4px] border-secondary">
          7
        </button>
      </div>

      <div className="mt-4 grid place-content-center gap-6">
        <button
          data-aos="fade-up"
          className="bg-white text-black font-bold px-4 py-3 rounded-lg flex flex-col items-center border border-black"
        >
          <div className="flex gap-1">
            Today bonus 5 <img width={20} src="/ticket.svg" alt="ticket" />
          </div>
          Log in every day to increase the bonus!
        </button>

        <button data-aos-delay="300"
          data-aos="fade-up"
          className="bg-white text-black font-bold px-4 py-3 rounded-lg flex flex-col items-center border border-black shadow-btn"
        >
          COLLECT BONUSES
        </button>
      </div>
    </main>
  );
}
