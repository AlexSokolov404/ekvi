"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AdvantagesSection from "@/components/advantages-section";
import StepsSection from "@/components/steps-section";
import InformationSection from "@/components/information-section";
import AppShowcase from "@/components/app-showcase";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import MobileMenu from "@/components/mobile-menu";
import { useRef } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const Sagewold = localFont({
  src: [
    {
      path: "../public/fonts/Sagewold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function Home() {
  const advantagesRef = useRef<HTMLDivElement>(null);
  const informationRef = useRef<HTMLDivElement>(null);
  const appShowcaseRef = useRef<HTMLDivElement>(null);

  const menuLinks = [
    { href: "#advantages", label: "ПРЕИМУЩЕСТВА" },
    { href: "#information", label: "ИНФОРМАЦИЯ" },
    { href: "#app-showcase", label: "ЭКВИ PAY'S" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleIdClick = (href: string) => {
    setTimeout(() => {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-gray-200 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-[1440px] flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleIdClick("top-main")}
          >
            <Image
              src="/img/cherylogo.png"
              alt="ICBCoin Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">ЭКВИ`C</h1>
              <p className={Sagewold.className + " text-[20px]/4"}>
                доходная среда
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex space-x-6 font-medium">
              <button
                onClick={() => scrollToSection("#advantages")}
                className="hover:text-gray-600"
              >
                ПРЕИМУЩЕСТВА
              </button>
              <button
                onClick={() => scrollToSection("#information")}
                className="hover:text-gray-600"
              >
                ИНФОРМАЦИЯ
              </button>
              <button
                onClick={() => scrollToSection("#app-showcase")}
                className="hover:text-gray-600"
              >
                ЭКВИсофт
              </button>
            </ul>
          </motion.nav>

          {/* Mobile Menu */}
          <MobileMenu links={menuLinks} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-10 mb-[135px] relative">
        <div className="absolute -left-20 -top-20 w-full h-full" id="top-main">
          <Image
            src="/svg/background1.svg"
            alt="Decorative waves"
            width={1200}
            height={100}
          />
        </div>
        <div className="container px-4 max-w-[1440px] min-h-[620px]">
          <div className="relative flex gap-8 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="relative z-10 mt-20">
                <div className="relative max-[768px]:flex justify-center flex-col max-[485px]:text-center">
                  <p
                    className={
                      Sagewold.className +
                      " text-[32px]/6 sm:text-[46px]/8 mb-6 xs:mb-8"
                    }
                  >
                    доходная среда
                  </p>
                  <h1 className="text-6xl sm:text-8xl leading-10 font-bold mb-6">
                    ЭКВИ`C
                  </h1>
                  <p
                    className={
                      Sagewold.className +
                      " text-[32px]/6 sm:text-[46px]/8 text-[#222222] mb-6 xs:mb-8 max-w-[520px]"
                    }
                  >
                    обеспечивает гарантируемый доход с первого дня
                    иcпользования!
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="max-sm:flex justify-center"
                  >
                    <Link
                      href="https://t.me/icbprof_bot?start=001"
                      className="inline-flex rounded-md overflow-hidden cursor-pointer"
                    >
                      <div
                        className={
                          Sagewold.className +
                          " bg-green-500 text-white px-4 py-2 flex items-center"
                        }
                      >
                        <Image
                          src="/img/cherylogo.png"
                          alt="ЭКВИ icon"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        <span className="text-3xl baseline">попробовать</span>
                      </div>
                      <div
                        className={
                          Sagewold.className +
                          " bg-gray-300 px-4 py-2 max-[360px]:hidden"
                        }
                      >
                        <span className="text-2xl/10">это бесплатно</span>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Image Grid */}
            <AnimatedSection delay={0.2} className="absolute top-0 right-0">
              <div className="relative overflow-hidden h-[620px] max-[1090px]:bg-[url('/img/bg-main.png')] max-[1090px]:mask-top-fade-soft bg-cover bg-center mask-no-repeat">
                <div className="grid grid-cols-2 gap-2 justify-self-end w-fit max-[1090px]:invisible">
                  {/* Левая колонка (вверх) */}
                  <div className="h-full animate-scroll-up max-[1090px]:animate-none">
                    <div className="flex flex-col gap-2">
                      {Array(2)
                        .fill([
                          "/img/slider1.png",
                          "/img/slider6.png",
                          "/img/slider3.png",
                        ])
                        .flat()
                        .map((src, idx) => (
                          <Image
                            key={"left-" + idx}
                            src={src}
                            alt={`Image ${idx}`}
                            width={250}
                            height={300}
                            className="object-cover h-auto"
                          />
                        ))}
                    </div>
                  </div>

                  {/* Правая колонка (вниз) */}
                  <div className="h-full animate-scroll-down max-[1090px]:animate-none">
                    <div className="flex flex-col gap-2 absolute bottom-0 right-0">
                      {Array(2)
                        .fill([
                          "/img/slider4.png",
                          "/img/slider5.png",
                          "/img/slider2.png",
                        ])
                        .flat()
                        .map((src, idx) => (
                          <Image
                            key={`right-${idx}`}
                            src={src}
                            alt={`Image ${idx}`}
                            width={250}
                            height={300}
                            className="object-cover h-auto"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <div
        id="advantages"
        ref={advantagesRef}
        className="mb-[135px] scroll-mt-20"
      >
        <AdvantagesSection />
      </div>

      {/* Steps Section */}
      <div className="mb-[135px]">
        <StepsSection />
      </div>

      {/* Information Section */}
      <div
        id="information"
        ref={informationRef}
        className="mb-[135px] scroll-mt-20"
      >
        <InformationSection />
      </div>

      {/* App Showcase Section */}
      <div
        id="app-showcase"
        ref={appShowcaseRef}
        className="mb-[135px] scroll-mt-20"
      >
        <AppShowcase />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
