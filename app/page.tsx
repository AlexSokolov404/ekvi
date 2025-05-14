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
          >
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="ICBCoin Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">ЭКВИ</h1>
              <p className="text-xs">Инновационная модель дохода</p>
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
                ЭКВИ PAY'S
              </button>
            </ul>
          </motion.nav>

          {/* Mobile Menu */}
          <MobileMenu links={menuLinks} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-20 mb-[135px] relative">
        <div className="absolute -left-20 -top-20 w-full h-full">
          <Image
            src="/svg/background1.svg"
            alt="Decorative waves"
            width={1200}
            height={100}
          />
        </div>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid justify-center md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="relative z-10">
                <div className="relative">
                  <h2 className="text-4xl lg:text-5xl leading-10 font-bold mb-6">
                    ЭКОСИСТЕМА ЭКВИ
                  </h2>
                  <p className="text-lg lg:text-2xl mb-8 max-w-md">
                    ИННОВАЦИОННАЯ МОДЕЛЬ ДОХОДА И НОВЫЙ ВИД НЕДВИЖИМОСТИ
                  </p>

                  <motion.div
                    className="inline-flex rounded-md overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-green-500 text-white px-4 py-2 flex items-center">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="ЭКВИ icon"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      <span>ЭКВИ</span>
                    </div>
                    <div className="bg-gray-300 px-4 py-2">
                      <span className="text-sm">
                        попробуйте, это абсолютно бесплатно
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Image Grid */}
            <AnimatedSection delay={0.2}>
              <div className="relative overflow-hidden h-[720px]">
                <div className="grid grid-cols-2 gap-2 justify-self-end w-fit">
                  {/* Левая колонка (вверх) */}
                  <div className="h-full animate-scroll-up">
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
                  <div className="h-full animate-scroll-down">
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
