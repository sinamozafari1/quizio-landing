"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: (
      <>
        Quiz On the <span className="text-orange-500">Go</span>
      </>
    ),
    description:
      "Answer a quiz for a shot at winning thrilling prizes! Test your knowledge and win big!",
  },
  {
    title: (
      <>
        Knowledge <span className="text-orange-500">Boosting</span>
      </>
    ),
    description:
      "Find fun and interesting quizzes to boost up your knowledge",
  },
  {
    title: (
      <>
        Win Rewards <span className="text-orange-500">Galore</span>
      </>
    ),
    description:
      "Answer a quiz for a shot at winning thrilling prizes! Test your knowledge and win big!",
  },
];

export default function PhoneSlider() {
  const [current, setCurrent] = React.useState(0);

  return (
    <div className="relative">
      <div className="w-[320px] h-[640px] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl flex flex-col items-center">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[2rem] flex items-center justify-between px-6 text-white text-xs z-10">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          {/* Carousel */}
          <div className="flex-1 flex flex-col justify-end pt-8 pb-8 px-6 relative">
            <Image
              src="/quiz-image.jpg"
              alt="Quiz App Screenshot"
              fill
              className="object-cover rounded-[2rem] absolute inset-0 z-0"
              style={{ opacity: 0.5 }}
            />
            <Carousel
              opts={{ loop: false }}
              setApi={api => {
                if (api) {
                  api.on("select", () => setCurrent(api.selectedScrollSnap()));
                }
              }}
              className="relative z-10"
            >
              <CarouselContent>
                {slides.map((slide, idx) => (
                  <CarouselItem key={idx}>
                    <div className="flex flex-col items-center justify-end h-[400px]">
                      <h2 className="text-2xl font-bold mb-2 text-center">{slide.title}</h2>
                      <p className="text-base text-center mb-6">{slide.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Dots */}
            <div className="flex space-x-2 mb-6 justify-center z-10 relative">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === current ? "bg-purple-500" : "bg-gray-300"}`}
                />
              ))}
            </div>
            {/* Buttons */}
            <div className="flex w-full justify-between items-center px-2 z-10 relative mt-2">
              <button
                className="text-purple-600 font-semibold text-sm hover:underline focus:outline-none"
                onClick={() => setCurrent(slides.length - 1)}
                tabIndex={0}
                type="button"
                style={{ background: 'none', border: 'none' }}
              >
                Skip
              </button>
              {current === slides.length - 1 ? (
                <Button
                  className="rounded-full px-8 py-3 text-lg font-bold text-white shadow-lg border-0"
                  style={{
                    background: 'linear-gradient(90deg, #a259ff 0%, #6a82fb 100%)',
                    boxShadow: '0 4px 16px 0 rgba(162,89,255,0.25)',
                  }}
                  onClick={() => alert('Get Started clicked!')}
                >
                  Get Started
                </Button>
              ) : (
                <Button
                  className="rounded-full p-0 w-12 h-12 flex items-center justify-center shadow-lg border-0"
                  style={{
                    background: 'linear-gradient(90deg, #a259ff 0%, #6a82fb 100%)',
                    boxShadow: '0 4px 16px 0 rgba(162,89,255,0.25)',
                  }}
                  variant="secondary"
                  onClick={() => setCurrent(current + 1)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              )}
            </div>
          </div>
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full z-10"></div>
        </div>
      </div>
      {/* Phone Shadow */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black/20 rounded-full blur-lg"></div>
    </div>
  );
}